import React,{useState}  from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,TextInput} from 'react-native';

export default function _39_API_useState(){

const [nome, setNome] = useState('Gilson');
const [input, setInput] = useState('');

function alteraNome(){
  
  setNome(input);
  setInput('');
    }


 return(
  <View style={myStyles.conteiner}>

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
    backgroundColor: '#222',
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


