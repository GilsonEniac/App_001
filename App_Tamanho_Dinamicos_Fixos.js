import {Component} from 'react'
import React,{View, Text} from 'react-native'



class App_Tamanho_Dinamicos_Fixos extends Component{
render(){
  return(
    <View style={{flex:1, marginTop: 20, marginBottom: 20, backgroundColor: '#555'}}>
      <View style={{height: 50, backgroundColor: 'red'}}></View>
      <View style={{flex: 1, backgroundColor: 'green'}}></View>
      <View style={{height: 50 , backgroundColor: 'yellow'}}></View>
      <Text style={{color: 'white'}}>Olá</Text>
    </View>
  )
}



}

export default App_Tamanho_Dinamicos_Fixos