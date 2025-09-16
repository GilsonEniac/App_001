import React,{useState, useEffect, useMemo,useRef}  from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function _42_API_useRef(){

const [nome, setNome] = useState('');
const [input, setInput] = useState('');
const nomeInput =useRef(null);


//Componet DidMount
useEffect(()=>{

async function getStorage(){
const nomeStorage = await AsyncStorage.getItem('nom');
if(nomeStorage !== null){
  setNome(nomeStorage);
} 

}

getStorage();
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

    function novoNome(){
      nomeInput.current.focus()
    }


 const letraNome = useMemo(()=>{
  console.log('Mudou  letra')
  return nome.length;
 },[nome])


 return(
  <View style={myStyles.conteiner}>
<Text style={{fontSize: 30, fontWeight: 'bold', textAlign:"center", color: 'green'}}> useRef</Text>
    <TextInput
    style={myStyles.input}
    placeholder='Digite seu nome'
    value={input}
    onChangeText={(texto)=>setInput(texto)}
    ref={nomeInput}
    />

       <TouchableOpacity style={myStyles.botao} onPress={alteraNome}>
    <Text style={myStyles.btnTexto}> Altera Nome</Text>
    </TouchableOpacity>

    <Text style={myStyles.texto}>
      Olá {nome}!
    </Text>
    <Text style={myStyles.texto}>
      Tem {letraNome} letras
    </Text>

<TouchableOpacity style={myStyles.botao} onPress={novoNome}>
    <Text style={myStyles.btnTexto}> Novo nome</Text>
    </TouchableOpacity>

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


