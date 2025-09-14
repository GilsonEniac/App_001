
import { Component } from "react";
import React,{View,Text, Button} from "react-native";



class App extends Component{

  constructor(props){
    super(props);
      this.state = {nome:''}
      
      /*Bind das funções */
      this.entrar =this.entrar.bind(this);
   

  }

   entrar(nome){
    this.setState({ nome: nome})
  }

   
  render(){
    return(
      <View style={{marginTop: 20}}>

        <Button title="Entrar" onPress={()=> this.entrar('GGGGGGG')}/>

        <Text style={{fontSize: 23, color: 'blue', textAlign:'center'}}>
        {this.state.nome}
        </Text>

        
    
      
      </View>

    );
  }

}


export default App;