import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';



export default function Amigos() {
    const amigos = [
      {
        id: 1,
        nome: 'Adicionar',
        src: require('../assets/imagens/add.png'),
      },
      {
        id: 2,
        nome: 'Patolino',
        src: require('../assets/imagens/patolino.jpg'),
      },
      {
        id: 3,
        nome: 'Taz',
        src: require('../assets/imagens/taz.jpg'),
      },
      {
        id: 4,
        nome: 'Longa',
        src: require('../assets/imagens/pernalonga.png'),
      },
      {
        id: 5,
        nome: 'Pato',
        src: require('../assets/imagens/patolino.jpg'),
      },
      {
        id: 6,
        nome: 'Taz loko',
        src: require('../assets/imagens/taz.jpg'),
      },
    ];

    function renderItem({ item }) {
      return <View style={styles.story}>
        <Image source={item.src} style={styles.perfil}/>
        <Text> {item.nome} </Text>
      </View>
    }

    return(
      <View>
          <View style={styles.padding}>
              <Text> ENVIO RÁPIDO </Text>
          </View>

          <View style={styles.stories}>
              <FlatList
                data={amigos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
          </View>

          <View style={styles.padding}>
              <Text> ENTRADA </Text>
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
      borderBottomColor: '#F5F5F5',
      
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