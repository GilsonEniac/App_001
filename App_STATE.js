import { Component } from "react";
import React,{View, Text, Button, Image} from "react-native";


class App_STATE extends Component{

constructor(prop){
    super(prop)
    this.state={nome:''}


    this.entra = this.entra.bind(this)
}

entra(nome){
    this.setState({nome :nome})
}

render(){


    return(
        
        <View style={{marginTop:20}}>

            

            <Text style={{textAlign:'center', color: 'red', fontSize:30  }}>
                {this.state.nome}
            </Text>

             <Jobs altura={200} largura={500}/>


              
            <Button title="Qual o nome desse cara?" onPress={()=>this.entra('Steve Jobs')}/>

        </View>
            
    )
}






}





class Jobs extends Component{

render(){

    let  img ='https://sujeitoprogramador.com/steve.png'

    return(
    <Image
    source={{uri:img}}
    style={{height:this.props.altura, width: this.props.largura}}
    />    
    )
}

}




export default App_STATE;