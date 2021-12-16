import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function Conteudo({navigation}) {

  const[conteudo, setConteudo] = useState([])

  useEffect(function(){
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails')
      const conteudoServidor = await response.json()

      setConteudo(conteudoServidor)
    }
    getData()
  }, [])


    

      function renderItem({ item }) {
        return <View style={styles.post} >
                  <TouchableOpacity onPress={() => navigation.navigate('Email')}>
                      <View style={styles.postheader} >
                          <View style={styles.postheaderesquerda}>
                              <Image source={{ uri: item.picture}} style={styles.postheaderimg}  />
                              <View>
                                  <Text style={styles.bold} > {item.to} </Text>
                                  <Text style={styles.bold2}> {item.tittle} </Text>
                                  <Text> {item.summary} </Text>
                                  
                              </View>
                              
                          </View>
                          
                          <View style={styles.direita}>
                          <FontAwesome5 name={item.star ? 'star'  : 'star'} size={17} color= "black" style={styles.star} onPress={() => console.log('APERTOU')}/>
                            <Text> {item.time} </Text>
                          </View>
                          
                          
                      </View>
                  </TouchableOpacity>

                    
                </View>
        
      }


    return(
            <View style={styles.conteudo}>
              
                <FlatList
                        data={conteudo}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                
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
    
    //feed
    conteudo: {
      flex: 1,
      
    },

    direita: {
      alignItems: 'center',
    },

    post: {
      paddingTop: 7,
      paddingBottom: 3,
      backgroundColor: '#fff',
      borderBottomColor: '#F5F5F5',
      borderBottomWidth: 1,
    },
    postheader: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
    },
    postheaderesquerda: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    
    postheaderimg: {
      width: 50,
      height: 50,
      borderRadius: 25,
      margin: 8,
    },
    postimg: {
      width: '100%',
      height: undefined,
      
    },
    footer: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    footericon: {
      margin: 8,
      
  
    },
    footeresquerda: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
  
    
  });
  