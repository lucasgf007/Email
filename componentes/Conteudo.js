import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function Conteudo() {
    const conteudo = [
        {
          id: 1,
          nome: 'Tax Gomes',
          assunto: 'Compra de uma casa...',
          conteudo: 'Olá, lucas td bem? meu nome é Taz...',
          src: require('../assets/imagens/taz.jpg'),
          favorito: 'star',
          color_fav: '#FFD700',
        },
        {
          id: 2,
          nome: 'Patolino Pato',
          assunto: 'Ganhe na mega agora...',
          conteudo: 'Olá, lucas td bem? meu nome é Pato...',
          src: require('../assets/imagens/patolino.jpg'),
          favorito: 'star',
          color_fav: '#FFD700',
        },
        {
          id: 3,
          nome: 'Mano Perna',
          assunto: 'Consorcio Perna',
          conteudo: 'Olá, lucas td bem? meu nome é Perna...',
          src: require('../assets/imagens/pernalonga.png'),
          favorito: 'star',
          color_fav: 'black',
        },
        {
          id: 4,
          nome: 'Taz Gomes',
          assunto: 'Compra de uma moto...',
          conteudo: 'Olá, lucas td bem? meu nome é Taz...',
          src: require('../assets/imagens/taz.jpg'),
          favorito: 'star',
          color_fav: 'black',
        },
        {
          id: 5,
          nome: 'Patolino Pato',
          assunto: 'Fique rico em 1 minuto...',
          conteudo: 'Olá, lucas td bem? meu nome é Pato...',
          src: require('../assets/imagens/patolino.jpg'),
          favorito: 'star',
          color_fav: 'black',
        },
        {
          id: 6,
          nome: 'Mano Perna',
          assunto: 'Consorcio Perna...',
          conteudo: 'Olá, lucas td bem? meu nome é Perna...',
          src: require('../assets/imagens/pernalonga.png'),
          favorito: 'star',
          color_fav: 'black',
        },
        {
            id: 7,
            nome: 'Mano Perna',
            assunto: 'Consorcio Perna...',
            conteudo: 'Olá, lucas td bem? meu nome é Perna...',
            src: require('../assets/imagens/pernalonga.png'),
            favorito: 'star',
            color_fav: 'black',
        },
        {
            id: 8,
            nome: 'Mano Perna',
            assunto: 'Consorcio Perna...',
            conteudo: 'Olá, lucas td bem? meu nome é Perna...',
            src: require('../assets/imagens/pernalonga.png'),
            favorito: 'star',
            color_fav: 'black',
        },
        {
            id: 9,
            nome: 'Mano Perna',
            assunto: 'Consorcio Perna...',
            conteudo: 'Olá, lucas td bem? meu nome é Perna...',
            src: require('../assets/imagens/pernalonga.png'),
            favorito: 'star',
            color_fav: 'black',
        },
        {
            id: 10,
            nome: 'Mano Perna',
            assunto: 'Consorcio Perna...',
            conteudo: 'Olá, lucas td bem? meu nome é Perna...',
            src: require('../assets/imagens/pernalonga.png'),
            favorito: 'star',
            color_fav: 'black',
        },

      ];

      function renderItem({ item }) {
        return <View style={styles.post}>
                    <View style={styles.postheader}>
                        <View style={styles.postheaderesquerda}>
                            <Image source={item.src} style={styles.postheaderimg} />
                            <View>
                                <Text style={styles.bold}> {item.nome} </Text>
                                <Text style={styles.bold2}> {item.assunto} </Text>
                                <Text> {item.conteudo} </Text>
                            </View>
                            
                        </View>
                        
                        <FontAwesome5 name= {item.favorito} size={20} color= {item.color_fav} />
                    </View>
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
  