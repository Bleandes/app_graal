import CheckBox from "@react-native-community/checkbox";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

export function Desperdicio(){
    
    const [requisicaoFutura, setRequisicaoFutura] = useState(false)
    const [dataAtual, setDataAtual] = useState(false);
    const [requerente, setRequerente] = useState('');
    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [dataSaida, setDataSaida] = useState('');
    const [dataSaidaRequisicaoFutura, setDataSaidaRequisicaoFutura] = useState('');
    const [motivo, SetMotivo] = useState('');
    
  const [unit, setUnit] = useState('units');

    function postRequisition(){
        axios.post('http://localhost:3000/api/postRequisition', {
            requerente: requerente,
            produto: produto,
            quantidade: quantidade
        })
    }

        useEffect(() => {
            if(dataAtual){
                setDataSaida(new Date(Date.now()).toLocaleString('pt-BR'))
            }
        }, [dataAtual])


    return (
    <View>
        <Text style={{ position:'absolute', top: 10, left: 10, fontSize: 20 }}></Text>
        <TextInput 
        style={styles.input}
        placeholder="Setor"
        maxLength={44}
        value={requerente}
        onChangeText={(text:string) => setRequerente(text)}
      />
      <TextInput 
        style={styles.input}
        placeholder="Produto"
        value={produto}
        onChangeText={(text:string) => setProduto(text)}
      />
     <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 2 }]}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={quantidade}
              onChangeText={setQuantidade}
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

      <View style={{display: "flex", flexDirection: "row", alignItems: "center", width: width, marginLeft: 10 }}>
        <CheckBox
        disabled={false}
        value={dataAtual}
        onValueChange={(newValue) => setDataAtual(newValue)}
        />
        <Text>Data atual</Text>

        </View>
  
    {requisicaoFutura == false && (    
      <TextInput 
        style={styles.input}
        placeholder="Data de saída"
        value={dataSaida}
        onChangeText={(text:string) => setDataSaida(text)}
        />
    )}

    {requisicaoFutura == true && (
        <TextInput 
        style={styles.input}
        placeholder="Data de Requisição futura"
        value={dataSaidaRequisicaoFutura}
        onChangeText={(text:string) => setDataSaidaRequisicaoFutura(text)}
        />
    )}
    <TextInput
      editable
      multiline
      placeholder="Motivo..."
      numberOfLines={4}
      onChangeText={text => SetMotivo(text)}
      value={motivo}
      style={{padding: 10, borderWidth: 1, borderRadius: 5, width: width - 20, marginBottom: 20, marginLeft: 12}}
      />
     
     <Button
     onPress={() => postRequisition()}
     title="Salvar" 
     />

      </View>
    );
}


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: width - 20
  },
      row: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }
});


