import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';


//Componentes da pagina
import Header from '../componentes/Header';
import Amigos from '../componentes/Amigos';
import Conteudo from '../componentes/Conteudo';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Header/>
      <Amigos navigation={navigation}/>
      <Conteudo navigation={navigation}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    
  },
  padding: {
    padding: 5,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bold2: {
    fontWeight: "bold",
    fontSize: 15,
  },

});
