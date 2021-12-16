import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';



export default function Amigos({navigation}) {
  const [amigos, setAmigos] = useState([])

  useEffect(function(){
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails') // vai esperar executar nessa linha
      const amigosServidor = await response.json()

      setAmigos(amigosServidor)
    }
    getData()
  }, [])

    const amigos2 = [
      {
        id: 14,
        nome: 'Adicionar',
        src: require('../assets/imagens/add.png'),
      },
      
    ];


    function renderItem({ item }) {
      return <View style={styles.story}>
        <TouchableOpacity onPress={() => navigation.navigate('Envio')}>
          <Image source={{ uri: item.picture}} style={styles.perfil}/>
          <Text> {item.to} </Text>
        </TouchableOpacity>
        
      </View>
    }

    return(
      <View>
          <View style={styles.padding}>
              <Text> ENVIO RÁPIDO </Text>
          </View>

          <View style={styles.stories}>
              <View style={styles.story}>
                <Image source={require('../assets/imagens/add.png')} style={styles.perfil}/>
                <Text> Adicionar </Text>
              </View>

              <FlatList
                data={amigos2}
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