import { useEffect, useState } from "react";
import { Button, Dimensions, Modal, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera";
import ProductModal from "./ModalProdutos";


const actions = [
  {
    text: "Adicionar",
    icon: require("../../img/adicionar.png"),
    name: "bt_add",
    position: 1
  },
  {
    text: "Scannear",
    icon: require("../../img/codigo-de-barras.png"),
    name: "bt_scan",
    position: 2
  }
];

export function Contagem() {
  const device = useCameraDevice('back')
  const [isCameraActive, setIsCameraActive] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const { hasPermission, requestPermission } = useCameraPermission();

  const [modalProdutosadd, setModalProdutosadd] = useState(false);

  let produto = {
    nomeProduto: 'coca-cola',
    codigo: '15151515',
    quantidade: '55'
  }

  const toggleModalProdutoAdd = () => {
    setModalProdutosadd(true)
  };

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
    setIsActive(!isActive);
  };

  function adicionar(codigoBarras: string) {

  }

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'code-128'],
    onCodeScanned: codes => {
      setIsActive(false);
      console.log(codes[0].value)

      adicionar(codes[0].value?.toString() ?? '');
    },
  });

  useEffect(() => {
    const checkPermission = async () => {
      if (!hasPermission) {
        setIsModalVisible(true);
        const result = await requestPermission();
        console.log("Permission requested, result:", result);
      }
    };
    checkPermission();
  }, [hasPermission]);


  const handleRequestPermission = async () => {
    const result = await requestPermission();
    if (result) {
      setIsModalVisible(false);
    }
  };


  if (device == null || !hasPermission) {
    return <Text>HasPermission False</Text>;
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Permissão para usar a câmera é necessária.</Text>
            <Button title="Conceder Permissão" onPress={handleRequestPermission} />
          </View>
        </View>
      </Modal>









      {isCameraActive && device && (
        <>
          <Camera
            style={styles.camera}
            device={device}
            isActive={isActive}
            audio={false}
            codeScanner={codeScanner}
          />
          <View style={styles.closeButtonContainer}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => toggleCamera()}
              underlayColor='#fff'>
              <Text>{`X`}</Text>
            </TouchableHighlight>
          </View>
        </>
      )}

      <ProductModal visible={modalProdutosadd} onClose={() => setModalProdutosadd(false)} />

      <FloatingAction
        actions={actions}
        onPressItem={name => {
          if (name === 'bt_scan') {
            toggleCamera()
          } else if (name === 'bt_add') {
            toggleModalProdutoAdd()
          }

        }}
      />


<View style={styles.productContainer}>
  <View style={styles.productInfo}>
    <Text style={styles.productName}>{produto.nomeProduto}</Text>
    <Text style={styles.productCode}>{produto.codigo}</Text>
  </View>
  <View style={styles.productQuantityContainer}>
    <Text style={styles.productQuantity}>{produto.quantidade}</Text>
  </View>
</View>

    </View>




  )
}


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  camera: {
    width: width,
    height: height,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonContainer: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'red',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },


  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#F5F5F5', 
    borderRadius: 10,
    elevation: 3,
  },
  productInfo: {
    flexDirection: 'column',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productCode: {
    fontSize: 14,
    color: '#666',
  },
  productQuantityContainer: {
    backgroundColor: '#FFD700', 
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  productQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});