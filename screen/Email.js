import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function Email({ route }) {

    const {id} = route.params
    const[email, setEmail] = useState([])

  useEffect(function(){
    async function getData() {
        
        const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id)
        const email = await response.json()

      setEmail(email)
    }
    getData()
  }, [])
  
    return(
            <View style={styles.container}>
                <View style={styles.conteudo}>

                        <View style={styles.post} >
                            <View style={styles.postheader}>
                                <View style={styles.postheaderesquerda}>  
                                    <Text style={styles.bold}> {email.tittle} </Text>

                                    <View style={styles.entrada}>  
                                        <Text> Entrada </Text>
                                    </View>
                                </View>
                                
                                <View style={styles.direita}>
                                    <FontAwesome5 name={email.star ? 'star'  : 'star'} size={17} color= "black" style={styles.star} onPress={() => console.log('STAR')}/> 
                                </View>   
                            </View>
                        </View> 

                        <View style={styles.post} >
                            <View style={styles.postheader}>
                                <View style={styles.postheaderesquerda}>
                                    <Image source={{ uri: email.picture}} style={styles.postheaderimg} />
                                    <View>
                                        <Text style={styles.bold} > {email.to} </Text>
                                        <Text> {email.time} </Text>
                                    </View>
                                    
                                </View>
                                
                                <View style={styles.direita}>
                                    <FontAwesome5 name='reply' size={20} color= "black" style={styles.padding} onPress={() => console.log('reponder')}/>
                                    <FontAwesome5 name='ellipsis-v' size={20} color= "black" style={styles.star} onPress={() => console.log('config')}/>    
                                </View>   
                            </View>
                        </View> 
                        <View style={styles.body}>
                            <Text> De: {email.from} </Text>
                            <Text> {email.body} </Text>
                        </View>
                        
                    
                </View>
            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    padding: {
      paddingRight: 18,
    },
    bold: {
      fontWeight: "bold",
      fontSize: 22,
    },
    bold2: {
      fontWeight: "bold",
      fontSize: 15,
    },
    
    //feed
    conteudo: {
      flex: 1,
      
    },

    body: {
        padding: 10,
        fontSize: 25,
    },

    entrada: {
        backgroundColor: '#D3D3D3',
        color: '#F8F8FF',
        alignItems: 'center',
        padding: 2,
        borderRadius: 6,
    },
    direita: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 7,
      
    },

    post: {
      paddingTop: 1,
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
      margin: 3,
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