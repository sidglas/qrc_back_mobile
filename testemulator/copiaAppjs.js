import React , { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { SvgXml } from 'react-native-svg';
//import Image from 'react-native-remote-svg'


import { MaterialIcons }     from '@expo/vector-icons'

import api from './services/api'

//const qr = require('qr-image');
//import qr from 'qr-image';

export default function App() {

  const[gitAddr, setGitAddr]=useState('')
  const showGitAddr = () => {
    console.log(gitAddr)

//https://gateway.gr1d.io/production/tools/qr-code/v1/create-qr-code/?data=https://github.com/sidglas    
    
  }

  async function apiGitAddr() {
    
    console.log('ola do Native')
    const response = await api.get('/qrcode', {
     params:  {
      gitAddr, 
      }
    })
    console.log('CHAMADAQR ', gitAddr)

    console.log(response)
    //console.log(response.data.devs)
    //setDevs(response.data.devs)
  }

//

const xml = 
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
<path d="M1 1h7v7h-7zM9 1h2v1h4v1h-2v2h1v3h-1v-2h-1v-1h-1v-2h-1v-1h-1zM15 1h3v2h-1v-1h-2zM19 1h7v7h-
7zM2 2v5h5v-5zM20 2v5h5v-5zM3 3h3v3h-3zM15 3h1v1h-1zM21 3h3v3h-3zM9 4h1v1h1v1h-1
v2h1v1h-1v1h1v1h-2v2h1v-1h1v-1h1v-1h-1v-1h1v-1h1v2h2v2h-1v-1h-1v2h1v3h-3v-1h2v-1
h-3v1h-2v-1h-1v-1h1v-1h-2v5h-1v1h-4v-1h3v-1h1v-1h-1v-1h-1v-1h2v-2h-1v-1h1v-1h1v2
h2v-1h-1v-1h2zM14 4h1v1h-1zM17 4h1v5h-1v-3h-2v-1h2zM11 7h1v1h-1zM15 7h1v2h-1zM1
9h1v1h1v1h-1v1h-1zM18 9h5v2h1v1h1v1h1v1h-1v1h-1v-1h-2v-1h1v-1h-2v2h-2v1h-1v-2h2v
-1h-4v-2h2v1h3v-1h-3zM25 9h1v1h-1zM24 10h1v1h-1zM15 12h1v1h-1zM16 13h1v2h1v1h1v1
h1v-2h1v-1h1v1h2v1h1v1h-1v1h-2v2h4v1h-2v1h2v1h-1v2h1v1h-3v-1h-3v1h-1v-1h-1v-1h-1
v-1h1v-1h-1v-6h-1v-1h-1v-1h1zM1 14h1v1h-1zM7 15h1v1h-1zM8 16h3v3h-1v1h-1v-2h-3v-
1h2zM15 16h1v1h-1zM22 16v1h1v-1zM12 18h1v1h1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h2v-1h1
zM14 18h2v2h-1v-1h-1zM18 18v3h3v-3zM1 19h7v7h-7zM19 19h1v1h-1zM2 20v5h5v-5zM3 21
h3v3h-3zM13 21h1v1h-1zM12 22h1v2h1v2h-3v-1h1v-1h-1v-1h1zM14 22h3v1h-1v2h-1v-1h-1
zM21 22v1h-1v1h2v-1h1v1h1v-1h-1v-1zM10 24h1v1h-1zM9 25h1v1h-1zM16 25h1v1h-1z" />
</svg>`

const novaxml = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 27\
"><path d=\"M1 1h7v7h-7zM9 1h2v1h4v1h-2v2h1v3h-1v-2h-1v-1h-1v-2h-1v-1h-1zM15 1h3
v2h-1v-1h-2zM19 1h7v7h-7zM2 2v5h5v-5zM20 2v5h5v-5zM3 3h3v3h-3zM15 3h1v1h-1zM21 3
h3v3h-3zM9 4h1v1h1v1h-1v2h1v1h-1v1h1v1h-2v2h1v-1h1v-1h1v-1h-1v-1h1v-1h1v2h2v2h-1
v-1h-1v2h1v3h-3v-1h2v-1h-3v1h-2v-1h-1v-1h1v-1h-2v5h-1v1h-4v-1h3v-1h1v-1h-1v-1h-1
v-1h2v-2h-1v-1h1v-1h1v2h2v-1h-1v-1h2zM14 4h1v1h-1zM17 4h1v5h-1v-3h-2v-1h2zM11 7h
1v1h-1zM15 7h1v2h-1zM1 9h1v1h1v1h-1v1h-1zM18 9h5v2h1v1h1v1h1v1h-1v1h-1v-1h-2v-1h
1v-1h-2v2h-2v1h-1v-2h2v-1h-4v-2h2v1h3v-1h-3zM25 9h1v1h-1zM24 10h1v1h-1zM15 12h1v
1h-1zM16 13h1v2h1v1h1v1h1v-2h1v-1h1v1h2v1h1v1h-1v1h-2v2h4v1h-2v1h2v1h-1v2h1v1h-3
v-1h-3v1h-1v-1h-1v-1h-1v-1h1v-1h-1v-6h-1v-1h-1v-1h1zM1 14h1v1h-1zM7 15h1v1h-1zM8
 16h3v3h-1v1h-1v-2h-3v-1h2zM15 16h1v1h-1zM22 16v1h1v-1zM12 18h1v1h1v1h-1v1h-1v1h
-1v1h-1v-1h-1v-1h2v-1h1zM14 18h2v2h-1v-1h-1zM18 18v3h3v-3zM1 19h7v7h-7zM19 19h1v
1h-1zM2 20v5h5v-5zM3 21h3v3h-3zM13 21h1v1h-1zM12 22h1v2h1v2h-3v-1h1v-1h-1v-1h1zM
14 22h3v1h-1v2h-1v-1h-1zM21 22v1h-1v1h2v-1h1v1h1v-1h-1v-1zM10 24h1v1h-1zM9 25h1v
1h-1zM16 25h1v1h-1z\"/></svg>`

//https://www.rapidtables.com/web/tools/svg-viewer-editor.html
//




  return (
    <>
      <View style={styles.container}>
        <Text  style={styles.text1}>Bora começar do zero ?</Text>
        <TextInput placeholder="digite seu nome" style={styles.text1}  /> 
        <View >
          <TextInput 
            placeholder="Digite seu endereço Github..."
            placeholdertextColor='#999'
            autoCorrect={false}
            value={gitAddr}
            onChangeText={ setGitAddr }
            style={styles.gitAddrInput} 
          />


          <TouchableOpacity onPress={showGitAddr} style={styles.loadButton} > 
            <MaterialIcons name="my-location" size={20} color="#F00" />
          </TouchableOpacity>   

          <TouchableOpacity onPress={apiGitAddr} style={styles.loadButton} > 
            <MaterialIcons name="my-location" size={20} color="#F00" />
          </TouchableOpacity>   
        </View>      
        <Image
        style={{width: 100, height: 100, marginTop: 10}}
        source={require('./assets/gitsid.png')}
        />                     



      </View>
      <View style={styles.container}>
        <Text  style={styles.text1}>Bora começar do zero ?</Text>
        <TextInput placeholder="digite seu nome" style={styles.text1} /> 

        <Image
          style={{width: 150, height: 150}}
          source={require('./assets/qr.png')}
        />        


      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text1: {
    color: '#00d',
    justifyContent: 'center',
    height: 30,
    fontSize: 20 ,
  },  

  searchform: {
    flexDirection: 'row',
  },  

  opac: {
    color: '#ffd',
    height: 20,
    width: 21 ,
  },  

  loadButton : {
    width: 40,
    height: 40,
    backgroundColor: '#8E4DFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 0,
  },

  gitAddrInput : {
    
    height: 45,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 5,
    fontSize: 16 ,
    shadowColor:'#c1c1c1',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
 

});
