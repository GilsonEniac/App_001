import React,{Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, Button,TextInput, TouchableOpacity,Keyboard} from 'react-native';


class _35_Usando_AsyncStorage extends Component{

constructor(props){
    super(props)
    this.state={
            nome: '',
            input: '',

    }

    this.pegaNome = this.pegaNome.bind(this)

}

//ComponetDidMount - Quando o componente é montado chamado em tela
async componentDidMount(){
await AsyncStorage.getItem('nom').then((value)=>{this.setState({nome: value})})

}

//ComponetDidUpdate - Toda vez quem um state é atualizado fazer algo
// tem 2 paramenteros para passsar 
// prevProps - trata das props anteriores se mudou (caso não deseje usarr agora use "_" no lugar deste paprametro)
// prevState - pega o esta anterior de ele antes de ser alterado
async componentDidUpdate(_,prevState){
    let nome = this.state.nome //Desconstrução

    if(prevState !== nome){
     await   AsyncStorage.setItem('nom', nome)

    }

}



pegaNome(){
    this.setState({nome: this.state.input})
    alert('Salvo com sucesso !')
    Keyboard.dismiss()
    
}



    render(){
        return(
        <View style={myStyles.conteiner}>
            
            
            <TextInput style={myStyles.input}
            placeholder='Digite alguma coisa'
           // value={this.state.input} qual a diferença de usar aou noão funciona do mesmo jeito
            onChangeText={(text)=>this.setState({input: text})}
            />

            <TouchableOpacity 
            style={myStyles.areaBtn}
            onPress={this.pegaNome}
            >
                
                <Text style={myStyles.textBtn}> 
                    Enviar
                </Text>
            </TouchableOpacity>

            <Text style={myStyles.nome}>{this.state.nome}</Text>
                   
        </View>
        )
    }

}


const myStyles = StyleSheet.create({
conteiner:{
    flex: 1,
    marginTop: 25,
    backgroundColor: "rgba(12, 219, 226, 1)"

},
input:{
    margin : 20,
    padding: 10,
    fontSize: 20,
    color: 'yellow',
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 18    


},
areaBtn:{
    margin: 20,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 20
},

textBtn:{
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight : 'bold',
    fontSize: 20
},
nome: {
    fontSize: 20,
    textAlign: 'center'
}


})

export default _35_Usando_AsyncStorage;