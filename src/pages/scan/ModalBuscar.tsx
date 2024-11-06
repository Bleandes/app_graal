import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

export default function ModalBuscar({ visible, onClose }:any) {
  const [chaveAcesso, setChaveAcesso] = useState('');

  const handleFetch = () => {
    //if(chaveAcesso.length > 44 || chaveAcesso.length < 44 ) return 'quantidade nao bate 
    fetchNfe(chaveAcesso)
    onClose(); 
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

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Buscar nota</Text>

          <TextInput
            style={styles.input}
            placeholder="chave de acesso"
            value={chaveAcesso}
            onChangeText={setChaveAcesso}
          />


          <View style={styles.buttonRow}>
            <Button title="Buscar" onPress={handleFetch} />
            <Button title="Cancelar" onPress={handleCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  picker: {
    height: 40,
    marginLeft: 10,
  },
  dateButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
