import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require('./assets/imagens/insta.png')} style={styles.logo}/>
        <FontAwesome5 name= "paper-plane" size={30} color="black" />
      </View>
      <View style={styles.stories}>
        <View style={styles.story}>
          <Image source={require('./assets/imagens/pernalonga.png')} style={styles.perfil}/>
          <Text> Perna </Text>
        </View>
        <View style={styles.story}>
          <Image source={require('./assets/imagens/patolino.jpg')} style={styles.perfil}/>
          <Text> Patolino </Text>
        </View>
        <View style={styles.story}>
          <Image source={require('./assets/imagens/taz.jpg')} style={styles.perfil}/>
          <Text> Taz </Text>
        </View>
        <View style={styles.story}>
          <Image source={require('./assets/imagens/pernalonga.png')} style={styles.perfil}/>
          <Text> Longa 1 </Text>
        </View>
        <View style={styles.story}>
          <Image source={require('./assets/imagens/patolino.jpg')} style={styles.perfil}/>
          <Text> Patolino 2 </Text>
        </View>
      </View>
      <View style={styles.conteudo}>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image source={require('./assets/imagens/taz.jpg')} style={styles.postheaderimg} />
              <Text> Taz Gomes</Text>
            </View>
            
            <FontAwesome5 name= "ellipsis-h" size={20} color="black" />
          </View>
          <Image aspectRatio={1.777} source={require('./assets/imagens/tinytoons.jpg')} style={styles.postimg} />
          <View style={styles.footer}>
              <View style={styles.footeresquerda}>
                <FontAwesome5 style={styles.footericon} name= "heart" size={25} color="black" />
                <FontAwesome5 style={styles.footericon} name= "comment" size={25} color="black" />
                <FontAwesome5 style={styles.footericon} name= "share-square" size={25} color="black" />
              </View>
            
            <FontAwesome5 style={styles.footericon} name= "bookmark" size={25} color="black" />
            
          </View>
        </View>
      
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image source={require('./assets/imagens/patolino.jpg')} style={styles.postheaderimg} />
              <Text> Patolino Silva</Text>
            </View>
            
            <FontAwesome5 name= "ellipsis-h" size={20} color="black" />
          </View>
          <Image aspectRatio={1.777} source={require('./assets/imagens/tinytoons3.jpg')} style={styles.postimg} />
          <View style={styles.footer}>
              <View style={styles.footeresquerda}>
                <FontAwesome5 style={styles.footericon} name= "heart" size={25} color="black" />
                <FontAwesome5 style={styles.footericon} name= "comment" size={25} color="black" />
                <FontAwesome5 style={styles.footericon} name= "share-square" size={25} color="black" />
              </View>
            
            <FontAwesome5 style={styles.footericon} name= "bookmark" size={25} color="black" />
            
          </View>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    
  },
  // header
  logo: {
    width: 145,
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
  // final do header

  // story
  stories: {
    height: 90,
    backgroundColor: '#fff',
    paddingRight: 10,
    flexDirection: 'row',
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

  //feed
  conteudo: {
    flex: 1,
    backgroundColor: 'red',
  },
  post: {
    backgroundColor: '#fff',
    paddingTop: 8,
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
