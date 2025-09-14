/*teste recebendo dadso aula 20 */


import { Component } from "react";
import React,{View, Text, TextInput, StyleSheet,Button, Image} from "react-native";



class teste02 extends Component{


constructor(props){
    super(props)
    this.state={
        nome: '',
        input: ''
    }
this.entra =this.entra.bind(this)
}

entra(){
    this.setState({nome: 'Olá : ' + this.state.input})
  
}
    
    render(){
        return(

    <View style={myStyles.conteiner}>

        <Text style={myStyles.mensagem}>
            {this.state.nome}
        </Text>


        {/* //Imagem negocios    */}
        <View style={myStyles.negocios}>    
            <Negocios altura={150} largura={150}/>
        </View>
    
        
        <TextInput style={myStyles.input}
        placeholder="Digite Alguma Coisa aqui"
        onChangeText={(texto)=>this.setState({input: texto})}
        />

        <View style={myStyles.botao}>
        <Button style={myStyles.botao}
        title="Clicar"
        onPress={this.entra}
        />
        </View>
        
    
    </View>
        )
    }
}

// minhas classes 
class Negocios extends Component{
    render(){
        return(
            <Image 
                source={require('./Imagens/homem-de-negocios.png')}
                style={{height: this.props.altura , width: this.props.largura}}
            />
        );
    }
}

//Meus estilos
const myStyles= StyleSheet.create({
    conteiner:{
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor:'rgba(208, 12, 226, 0.99)'
    },
    negocios:{
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        margin: 10,
        marginBottom: 40,
        borderWidth: 3,
        backgroundColor: 'white',
        borderRadius: 20,
        fontSize: 20,
        padding: 10,
        fontStyle:'italic'
        
    },
    mensagem:{
        margin: 20,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight:'bold',
        textAlign: 'center',
        color: 'rgba(93, 6, 233, 0.95)'
    },
    botao:{
        margin: 40
    }
})




export default teste02;
