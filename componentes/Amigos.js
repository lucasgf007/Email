import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';


export default function Amigos() {
    return(

    <View>
        <View style={styles.padding}>
            <Text> ENTRADA </Text>
        </View>

        <View style={styles.stories}>
            <View style={styles.story}>
            <Image source={require('../assets/imagens/add.png')} style={styles.perfil}/>
            <Text> Adicionar </Text>
            </View>
            <View style={styles.story}>
            <Image source={require('../assets/imagens/patolino.jpg')} style={styles.perfil}/>
            <Text> Patolino </Text>
            </View>
            <View style={styles.story}>
            <Image source={require('../assets/imagens/taz.jpg')} style={styles.perfil}/>
            <Text> Taz </Text>
            </View>
            <View style={styles.story}>
            <Image source={require('../assets/imagens/pernalonga.png')} style={styles.perfil}/>
            <Text> Longa 1 </Text>
            </View>
            <View style={styles.story}>
            <Image source={require('../assets/imagens/patolino.jpg')} style={styles.perfil}/>
            <Text> Patolino 2 </Text>
            </View>
        </View>


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
    // Amigos
    stories: {
      height: 90,
      backgroundColor: '#fff',
      paddingRight: 10,
      flexDirection: 'row',
      marginBottom: 10,
    },
    story: {
      height: 90,
      width: 90,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 3,
      
    },
    perfil: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
    // final do story
  
    
  });