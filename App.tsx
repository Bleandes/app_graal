import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Scan } from './src/pages/scan';
import { Requisition } from './src/pages/requisition';
import { CentroCusto } from './src/pages/cc';
import { EntradasEstoque } from './src/pages/entradasEstoque';
import { Faltas } from './src/pages/Faltas';
import { Pedido } from './src/pages/Pedidos';
import { Giro } from './src/pages/Giro';
import { Desperdicio } from './src/pages/Desperdicio';
import { Contagem } from './src/pages/Contagem';
import { ChecklistScreen} from './src/pages/Checklist';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { TonnysScreen } from './src/pages/Checklist/TonnysScreen';
import { NickScreen } from './src/pages/Checklist/NickScreen';
import { RouteScreen } from './src/pages/Checklist/RouteScreen';
import { LojaScreen } from './src/pages/Checklist/LojaScreen';
import { PadariaScreen } from './src/pages/Checklist/PadariaScreen';
import { GrillScreen } from './src/pages/Checklist/GrillScreen';
import { ViaLeveScreen } from './src/pages/Checklist/ViaLeveScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//const Stack = createNativeStackNavigator();


const LinkChecklist = createNativeStackNavigator();

function ChecklistStackScreen() {


  return (
    <LinkChecklist.Navigator>
      <LinkChecklist.Screen name="ChecklistMain" component={ChecklistScreen} options={{ headerShown: false }} />
      <LinkChecklist.Screen name="Tonnys" component={TonnysScreen} />
      <LinkChecklist.Screen name="Nick" component={NickScreen} />
      <LinkChecklist.Screen name="Route" component={RouteScreen} />
      <LinkChecklist.Screen name="Loja" component={LojaScreen} />
      <LinkChecklist.Screen name="Padaria" component={PadariaScreen} />
      <LinkChecklist.Screen name="Grill" component={GrillScreen} />
      <LinkChecklist.Screen name="ViaLeve" component={ViaLeveScreen} options={{ headerTitle: 'Via Leve' }} />
    </LinkChecklist.Navigator>
  );
}

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Scan"
       screenOptions={{
        headerStyle: {
          backgroundColor: '#6200EE', // Cor de fundo do header
        },
        headerTintColor: '#FFF', // Cor do texto do header
        headerTitleAlign: 'center', // Centralizar título
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20, // Tamanho do texto do header
        },
        headerBackground: () => (
          <View style={styles.headerBackground}>
            <Text style={styles.headerTitle}></Text>
          </View>
        ),
      }}
      >
        <Drawer.Screen name="Scan" component={Scan}
        //  options={{
        //   tabBarIcon: () => (<Image
        //     source={require('./src/img/codigo-qr.png')} 
        //     style={{ width: 20, height: 20 }}
        //     />)
        // }} 
        />
        <Drawer.Screen name="Requisição" component={Requisition}
        //  options={{
        //   tabBarIcon: () => (<Image
        //   source={require('./src/img/solicitacao.png')} 
        //   style={{ width: 20, height: 20 }}
        // />),
        // }} 
        />
        <Drawer.Screen name="Entradas manuais" component={EntradasEstoque} 
        // options={{
        //   tabBarIcon: () => (<Image
        //     source={require('./src/img/em-estoque.png')} 
        //     style={{ width: 20, height: 20 }}
        //   />)
        // }} 
        />
        <Drawer.Screen name="Faltas" component={Faltas}
        //  options={{
        //   tabBarIcon: () => (<Image
        //     source={require('./src/img/falta-produto.png')} 
        //     style={{ width: 20, height: 20 }}
        //   />)
        // }} 
        />
        <Drawer.Screen name="Giro" component={Giro}
        //  options={{
        //   title: 'Giro de Produto',
        //   tabBarIcon: () => (<Image
        //     source={require('./src/img/novo-produto.png')} 
        //     style={{ width: 20, height: 20 }}
        //   />)
        // }} 
        />

        <Drawer.Screen name="Desperdicio" component={Desperdicio}
        //  options={{
        //   title: 'Desperdicio',
        //   tabBarIcon: () => (<Image
        //     source={require('./src/img/desperdicio.png')} 
        //     style={{ width: 20, height: 20 }}
        //   />)
        // }} 
        />
        {/* <Drawer.Screen name="Centro de Custo" component={CentroCusto} options={{
          tabBarIcon: () => (<Image
            source={require('./src/img/custo.png')} 
            style={{ width: 20, height: 20 }}
          />)
        }} /> */}

        {/* <Drawer.Screen name="Pedido" component={Pedido} options={{
          tabBarIcon: () => (<Image
            source={require('./src/img/custo.png')} 
            style={{ width: 20, height: 20 }}
            />)
          }} /> */}
        <Drawer.Screen name="Contagem" component={Contagem}
        //  options={{
        //   tabBarIcon: () => (<Image
        //     source={require('./src/img/contagem.png')} 
        //     style={{ width: 20, height: 20 }}
        //   />)
        // }} 
        />
    <Drawer.Screen
          name="Checklist"
          component={ChecklistStackScreen}
          // options={({ route }) => ({
          //   tabBarIcon: () => (
          //     <Image
          //       source={require('./src/img/check-list.png')}
          //       style={{ width: 20, height: 20 }}
          //     />
          //   ),
          // })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
        <BottomTabs />
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}




const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#6200EE', // Mesma cor de fundo do header
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});