import React,{ Component} from 'react';
import {View, Text, Image} from 'react-native';


class App extends Component{
  render(){

    let nome='GILSON MOURA GOMES';
    let img='https://sujeitoprogramador.com/steve.png'

    return(

    <View style={{margin: 20, backgroundColor: 'red'}}>

      <Text style>
        Ola
      </Text> 

      <Image 
      source={{uri: img}}
      style={{width: 300, height:300}}

      />
      
     
      <Text style={{color:'green', marginTop:30, fontSize: 20}}>
       {nome}
      </Text>

    </View>
    );
  }
}

export default App;
