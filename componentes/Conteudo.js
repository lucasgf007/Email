import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Conteudo() {
    return(

        <View>
            
            <View style={styles.conteudo}>
                <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                    <Image source={require('../assets/imagens/taz.jpg')} style={styles.postheaderimg} />
                    <View>
                        <Text style={styles.bold}> Tax Gomes</Text>
                        <Text style={styles.bold2}> Compra de uma casa...</Text>
                        <Text> Olá, lucas td bem? meu nome é Taz...</Text>
                    </View>
                    
                    </View>
                    
                    <FontAwesome5 name= "star" size={20} color="black" />
                </View>
                
                </View>
                <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                    <Image source={require('../assets/imagens/patolino.jpg')} style={styles.postheaderimg} />
                    <View>
                        <Text style={styles.bold}> Patolino Pato</Text>
                        <Text style={styles.bold2}> Ganhe na mega agora...</Text>
                        <Text> Olá, lucas td bem? meu nome é Pato...</Text>
                    </View>
                    
                    </View>
                    
                    <FontAwesome5 name= "star" size={20} color="black" />
                </View>
                
                </View>
                <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                    <Image source={require('../assets/imagens/pernalonga.png')} style={styles.postheaderimg} />
                    <View>
                        <Text style={styles.bold}> Mano Perna</Text>
                        <Text style={styles.bold2}> Consorcio Perna</Text>
                        <Text> Olá, lucas td bem? meu nome é Perna...</Text>
                    </View>
                    
                    </View>
                    
                    <FontAwesome5 name= "star" size={20} color="black" />
                </View>
                
                </View>
                <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                    <Image source={require('../assets/imagens/taz.jpg')} style={styles.postheaderimg} />
                    <View>
                        <Text style={styles.bold}> Taz Gomes</Text>
                        <Text style={styles.bold2}> Compra de uma moto...</Text>
                        <Text> Olá, lucas td bem? meu nome é Taz...</Text>
                    </View>
                    
                    </View>
                    
                    <FontAwesome5 name= "star" size={20} color="black" />
                </View>
                
                </View>
                <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                    <Image source={require('../assets/imagens/patolino.jpg')} style={styles.postheaderimg} />
                    <View>
                        <Text style={styles.bold}> Patolino Pato</Text>
                        <Text style={styles.bold2}> Fique rico em 1 minuto...</Text>
                        <Text> Olá, lucas td bem? meu nome é Pato...</Text>
                    </View>
                    
                    </View>
                    
                    <FontAwesome5 name= "star" size={20} color="black" />
                </View>
                
                </View>

                <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                    <Image source={require('../assets/imagens/pernalonga.png')} style={styles.postheaderimg} />
                    <View>
                        <Text style={styles.bold}> Mano Perna</Text>
                        <Text style={styles.bold2}> Consorcio Perna...</Text>
                        <Text> Olá, lucas td bem? meu nome é Perna...</Text>
                    </View>
                    
                    </View>
                    
                    <FontAwesome5 name= "star" size={20} color="black" />
                </View>
                
                </View>

                <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                    <Image source={require('../assets/imagens/pernalonga.png')} style={styles.postheaderimg} />
                    <View>
                        <Text style={styles.bold}> Mano Perna</Text>
                        <Text style={styles.bold2}> Consorcio Perna...</Text>
                        <Text> Olá, lucas td bem? meu nome é Perna...</Text>
                    </View>
                    
                    </View>
                    
                    <FontAwesome5 name= "star" size={20} color="black" />
                </View>
                
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
    
    //feed
    conteudo: {
      flex: 1,
      
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
  