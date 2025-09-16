import React,{useState, useEffect}  from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateLanguageServiceSourceFile } from 'typescript';



export default function _40_API_useState(){

const [nome, setNome] = useState('');
const [input, setInput] = useState('');


//Componet DidMount
useEffect(()=>{

async function getStorage(){
const nomeStorage = await AsyncStorage.getItem('nom');
if(nomeStorage !== null){
  setNome(nomeStorage);
} 

}

getStorage();


},[]);

//Component DidUpdate
 useEffect(()=>{

  async function savaStoreg(){
    await AsyncStorage.setItem('nom', nome)
}

  savaStoreg();

 },[nome])

          


  function alteraNome(){
  
  setNome(input);
  setInput('');
    }


 return(
  <View style={myStyles.conteiner}>
<Text style={{fontSize: 30, fontWeight: 'bold', textAlign:"center", color: 'green'}}> useEFFECT</Text>
    <TextInput
    style={myStyles.input}
    placeholder='Digite seu nome'
    value={input}
    onChangeText={(texto)=>setInput(texto)}
    />

       <TouchableOpacity style={myStyles.botao} onPress={alteraNome}>
    <Text style={myStyles.btnTexto}> Altera Nome</Text>
    </TouchableOpacity>

    <Text style={myStyles.texto}>
      Olá {nome}!
    </Text>
  </View>

 )


}

const  myStyles = StyleSheet.create({
conteiner:{
    flex: 1,
     margin:15,
    },

  texto:{
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center'
  },

  botao:{
    margin: 10,
    backgroundColor: '#ee0d0dff',
    alignItems: 'center',
  },
  btnTexto:{
    color: '#fff',
  },
  input:{
    height: 40,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    padding: 10,
  }
})


