import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function Email({navigation}) {

    // const {id} = route.params
    const[email, setEmail] = useState([])

  useEffect(function(){
    async function getData() {
        
        const response = await fetch('https://mobile.ect.ufrn.br:3002/emails' + id)
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
                                    <Image source={{ uri: email.picture}} style={styles.postheaderimg} />
                                    <View>
                                        <Text style={styles.bold} > {email.to} </Text>
                                        <Text style={styles.bold2}> {email.tittle} </Text>
                                        <Text> {email.summary} </Text>
                                        
                                    </View>
                                    
                                </View>
                                
                                <View style={styles.direita}>
                                <FontAwesome5 name={email.star ? 'star'  : 'star'} size={17} color= "black" style={styles.star} onPress={() => console.log('APERTOU')}/>
                                    <Text> {email.id} </Text>
                                </View>   
                            </View>
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