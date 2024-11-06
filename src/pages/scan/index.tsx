import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { FloatingAction } from 'react-native-floating-action';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import ModalBuscar from './ModalBuscar';
export function Scan(){
  const [chaveDeAcesso, setChaveDeAcesso] = useState('');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [fetchProduto, setFetchProduto] = useState(false);

  const [isActive, setIsActive] = React.useState(true);
  const [isMount, setIsMount] = React.useState(true);
  const [codigodebarras, setCodigodebarras] = React.useState('');

  const toggleModalBuscar = () => {
    setFetchProduto(true)
  };

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
    //setIsActive(!isActive);
  };

  // const toggleCamera = () => {
  //   setIsCameraActive(!isCameraActive);
  // };

  const takePicture = async (camera: any) => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri); // URL da imagem capturada
    }
  };


  function fetchNfe(chaveDeAcesso: string) {
  //   axios.post(`http://localhost:3000/api/dataNFe/${chaveDeAcesso}`)
  // .then(response => console.log(response))
  // .catch(error => console.error(error));
  axios.post(`http://localhost:3000/api/dataNFe/${chaveDeAcesso}`)
    .then(response => {
      console.log('Response:', response.data);  // Certifique-se de exibir os dados da resposta
    })
    .catch(error => {
      if (error.response) {
        // O servidor respondeu com um código de status fora do intervalo 2xx
        console.error('Error Response Data:', error.response.data);
        console.error('Error Status:', error.response.status);
        console.error('Error Headers:', error.response.headers);
      } else if (error.request) {
        // A requisição foi feita, mas não houve resposta
        console.error('No response received:', error.request);
      } else {
        // Algo aconteceu ao configurar a requisição
        console.error('Axios Error:', error.message);
      }
      console.error('Config:', error.config);
    });

}

  const device = useCameraDevice('back')


  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'code-128'],
    onCodeScanned: codes => {
      setIsActive(false);
      setIsMount(false);
      console.log(codes[0].value)

      fetchNfe(codes[0].value?.toString() ?? '');
    },
  });

  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      console.log(requestPermission());
    }
  }, [hasPermission, requestPermission]);

  if (device == null || !hasPermission) {
    return <Text>HasPermission False</Text>;
  }


  const actions = [
    {
      text: "Buscar nota",
      icon: require("../../img/adicionar.png"),
      name: "bt_fetch",
      position: 1
    },
    {
      text: "Scannear",
      icon: require("../../img/codigo-de-barras.png"),
      name: "bt_scan",
      position: 2
    }
  ];

  const togglefetch = () => {
    setFetchProduto(true)
  };



  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Button title={isCameraActive ? "Fechar Câmera" : "Abrir Câmera"} onPress={toggleCamera} />
     
     
      {isCameraActive && (
       <Camera
       style={styles.camera}
       device={device}
       isActive={isActive}
       audio={false}
       codeScanner={codeScanner}
     />
     
      )} */}
      

    <ModalBuscar visible={fetchProduto} onClose={() => setFetchProduto(false)} />

    <FloatingAction
        actions={actions}
        onPressItem={name => {
          if (name === 'bt_scan') {
            toggleCamera()
          } else if (name === 'bt_fetch') {
            toggleModalBuscar()
          }

        }}
      />

     

      {/* {isCameraActive && (
        <RNCamera
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          ref={camera => { camera = camera; }}
        >
          {isCameraActive && (
        <Button title="Tirar Foto" onPress={takePicture} />
             )}
        </RNCamera>
      )} */}

    

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

      

      {/* <TextInput 
      placeholder="Código de barras"
      maxLength={44}
      value={codigodebarras}
      onChangeText={(text:string) => setCodigodebarras(text)}
      />

     <Button
     onPress={() => fetchNfe(codigodebarras)}
     title="Buscar" 
     /> */}

     <View style={{backgroundColor: 'gray', height: '2rem', width: '2rem' }}>
      <Text> pao </Text>
     </View>

      </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  camera: {
    width: width,
    height: height,
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
});