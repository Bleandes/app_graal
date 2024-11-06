import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function ProductModal({ visible, onClose }:any) {
  const [productName, setProductName] = useState('');
  const [barcode, setBarcode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('units');
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    Alert.alert("Produto salvo", `Nome: ${productName}, Código: ${barcode}, Quantidade: ${quantity} ${unit}, Vencimento: ${expirationDate.toLocaleDateString()}`);
    onClose(); 
  };

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
          <Text style={styles.modalTitle}>Adicionar Produto</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome do Produto"
            value={productName}
            onChangeText={setProductName}
          />

          <TextInput
            style={styles.input}
            placeholder="Código de Barras"
            keyboardType="numeric"
            value={barcode}
            onChangeText={setBarcode}
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 2 }]}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
            />
            <Picker
              selectedValue={unit}
              style={[styles.picker, { flex: 1 }]}
              onValueChange={(itemValue) => setUnit(itemValue)}
            >
              <Picker.Item label="Unidades" value="units" />
              <Picker.Item label="Kg" value="kg" />
              <Picker.Item label="Litros" value="liters" />
            </Picker>
          </View>

          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
            <Text>Data de Vencimento: {expirationDate.toLocaleDateString()}</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={expirationDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setExpirationDate(selectedDate);
              }}
            />
          )}

          <View style={styles.buttonRow}>
            <Button title="Salvar" onPress={handleSave} />
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
