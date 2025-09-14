import { Component } from "react";
import React,{View,Text,Button} from "react-native";



class App extends Component{

constructor(props){
  super(props)
    this.state ={nome :''}

  this.entrar = this.entrar.bind(this)
}

entrar(nome){
  this.setState({nome : nome})
}


  render(){
    return(

      <View style={{marginTop: 20}}>
      
      
         <Button title='ENTRAR' onPress={()=> this.entrar('Ocha')}/>
         
      
        
          <Text style={{textAlign:'center', fontSize: 30, color:'red'}}>
          {this.state.nome}
          </Text>
   

      </View>

    );

  }
}




export default App;
