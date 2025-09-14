import { Component } from "react";
import {Comment} from "react";
import React,{View,Text,Button}from "react-native";



class App_State_execicio extends Component{

  constructor(prop){
    super(prop)
    this.state={nome:''}
    

    this.entra = this.entra.bind(this)
  }

  entra(nome){
    this.setState({nome: nome})
  }

render(){
return(

  <View style={{marginTop:20}}>

    <Text style={{textAlign:'center', fontSize: 30, color:'red'}}>
     {this.state.nome}
    </Text>
  
    <Button title="Qual o nome ?" onPress={()=> this.entra('Stave Jobs')}/>
  </View>


  )
}

}

export default App_State_execicio;