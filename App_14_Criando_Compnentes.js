
import { Component } from "react";
import React,{View,Text, Image} from "react-native";



class App extends Component{
  render(){
    return(
      <View style={{marginTop: 20}}>
        <Text>
          Ola mundo velho
        </Text>

      <Jobs largura={500} altura={200} />
      <Nome nome='GILSON MOURA GOMES'/>
      
      </View>

    );
  }

}

class Jobs extends Component{
  render(){
  
    let img='https://sujeitoprogramador.com/steve.png'

    return(
      <Image
        source={{uri: img}}
        style={{width: this.props.largura, height: this.props.altura}}
      />
    );
  }
}


class Nome extends Component{
  render(){

      

    return(
      <Text style={{fontSize: 30, color: 'green'}}>
        {this.props.nome}
      </Text>
    );
  }
}

export default App;