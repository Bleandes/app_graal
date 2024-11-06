import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'

const emojisWithIcons = [ {status:'Pendente'}, {status:'Completo'}];

export function Pedido() {
    const [produtoFalta, setProdutoFalta] = useState('');

        let produtos = [
            {
                falta: produtoFalta,
                status: 'pending', 
                data: new Date(Date.now()).toLocaleString('pt-BR'),       
            },
            {
                falta: produtoFalta,
         status: 'pending', 
         data: new Date(Date.now()).toLocaleString('pt-BR')
            },
        ]
    

    function adicionarFalta(produtoFalta:string) {
        axios.post('/api/addFalta', 
        {
         falta: produtoFalta,
         status: 'pending', 
         data: new Date(Date.now()).toLocaleString('pt-BR')},
        )}

        useEffect(() => {
        }, [produtoFalta]);

    return (
            <View>

                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10, padding: 0 }}>
                <TextInput 
                    style={{height: 35, margin: 12, padding: 10, borderRadius: 5, borderWidth: 1, width: 300}}
                    placeholder="Produto"
                    value={produtoFalta}
                    onChangeText={(text:string) => setProdutoFalta(text)}
                />
                <Button title="+" color='red' onPress={() => { adicionarFalta(produtoFalta) }}></Button>
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", borderTopWidth: 1, borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20 }}>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <Text>Cenoura</Text>
                <Text>07/10/2024, 17:15:25</Text>
                </View>
  
                <View style={{ display: "flex", justifyContent: "flex-end" }}>
                    {/* <Text style={{ color: 'yellow' }}>Pendente</Text> */}
                
                    <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.status)}
          </Text>
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Text style={styles.dropdownItemTxtStyle}>{item.status}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
                
                
                </View>
                </View>
            
        </View>
    );
}




const styles = StyleSheet.create({
    dropdownButtonStyle: {
      width: 200,
      height: 50,
      backgroundColor: '#E9ECEF',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownButtonArrowStyle: {
      fontSize: 28,
    },
    dropdownButtonIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
    dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
  });