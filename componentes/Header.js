import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header() {
    return(
        <View style={styles.header}>
            <FontAwesome5 name= "bars" size={30} color="black" style={styles.padding} />
            <View style={styles.pesquisa}>
            <Text style={styles.pesquisa2}> Pesquisar </Text>
            <FontAwesome5 name= "search" size={25} color="#C0C0C0"/>
            </View>
            <Image source={require('../assets/imagens/email.png')} style={styles.logo}/>
        
        </View>
    );
}


const styles = StyleSheet.create({
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
    // header
    logo: {
      width: 50,
      height: 50,
      
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      backgroundColor: '#fff',
      paddingRight: 10,
      
    },
    pesquisa2: {
      color: '#C0C0C0',
      paddingEnd: 10,
      fontSize: 18,
    },
    pesquisa: {
      backgroundColor: '#F5F5F5',
      fontSize: 30,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#F5F5F5',
      borderWidth: 0.8,
      borderRadius: 10,
      paddingTop: 5,
      paddingEnd: 20,
      paddingBottom: 5,
      paddingLeft: 20,
  
  
  
    },
    // final do header
  
  });