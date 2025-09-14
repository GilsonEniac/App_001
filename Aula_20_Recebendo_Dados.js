import {Component} from 'react';
import React,{View,Text,TextInput, StyleSheet} from 'react-native';



class Aula_20_Recebendo_Dados extends Component{

    constructor(props){
        super(props)
        this.state = {
            nome: ''
        }
        this.peganome =this.peganome.bind(this)
    }

    peganome(texto){
        this.setState({nome: texto})
    }

    render(){
        return(
            <View style={myStyles.Conteiner}>

                <TextInput
                style={myStyles.input}
                placeholder='Digite seu nome'
                onChangeText={this.peganome}
               
                />
                
                <Text style={myStyles.txtMsg}>
                    {this.state.nome}
                </Text>
            </View>
        )
    }
}

const myStyles = StyleSheet.create({
Conteiner:{
    flex: 1,
    backgroundColor: 'rgba(14, 226, 138, 0.84)',
    marginTop: 20,
    marginBottom: 20
},
txtMsg:{
    fontWeight:'bold',
    fontSize:20,
    textAlign: 'center',
    color: 'green'
},

input:{
    margin: 10,
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
    backgroundColor: 'yellow'
}

})


export default Aula_20_Recebendo_Dados;
