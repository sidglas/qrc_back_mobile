import React , { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { SvgXml } from 'react-native-svg';
import Image from 'react-native-remote-svg'


import { MaterialIcons }     from '@expo/vector-icons'

import api from './services/api'

//const qr = require('qr-image');
//import qr from 'qr-image';

export default function App() {

  const[gitAddr, setGitAddr]=useState('')
  const[responseAPI, setResponseAPI]=useState(false)
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

    console.log(response.data)
    setResponseAPI(response.data)
  }

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

        {
          // AQUI TAMBEM
          responseAPI &&
          <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "data:image/svg+xml;utf8," + responseAPI }}
          />
        }


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
