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
        <Image source={require('./assets/imagens/logo.png')} style={styles.logo}/>
        <FontAwesome5 name= "comment-dots" size={30} color="black" />
      </View>
      <View style={styles.stories}>
        
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#F8F8FF',
    paddingRight: 10,
  },
  stories: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 85,
    backgroundColor: '#F5F5F5',
    paddingRight: 10,
  },
  logo: {
    width: 160,
    height: 50,
    
  },
});
