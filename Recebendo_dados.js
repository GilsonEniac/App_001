import { Component } from "react";
import React,{View,Text, StyleSheet, TextInput} from "react-native";


class Recebendo_dados extends Component{

constructor(props){
  super(props);
  this.state = {nome: 'Gilson'};

  this.pegaNome =this.pegaNome.bind(this)
}

pegaNome(texto){
  this.setState({nome: texto});
}

  render(){
    return(
      
      
      <View style={myStyles.conteiner}>
        
        <TextInput
        style={myStyles.input}
        placeholder='Digite seu nome...'
        onChangeText={this.pegaNome}

        />

        <Text style={myStyles.texto}>
        {this.state.nome}
        </Text>
       
      </View>

    )
  }
}

const myStyles = StyleSheet.create({

  conteiner:{
    marginTop: 20,
    flex: 1,
    backgroundColor: 'yellow'
  },
  input:{
    margin: 10,
    height: 45,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'white',
    fontSize: 20,
    padding: 10
  },

  texto:{
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  }

})   



export default Recebendo_dados