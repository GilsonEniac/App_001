/**
 * DESAFIO
 * 
 * - BANCO REACT
 * 
 * Nome (TextInput)
 * idade )TextInput
 * Sexo (Picker)
 * seu limite de sque (slider)
 * estudasnte (switch)
 * 
 * 
 * Botão (abrir conta)
 *MOstra todos dados em um alerta,
 não pode deixar nehuma informação em branco

 Pode mostra na tele mesmo
 * 
 * 
 */


import { Component } from "react";
import React,{View,Text, TextInput, StyleSheet, Switch,Button }from "react-native";
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';



class AppDesafio extends Component{

constructor(props){
    super(props)
    this.state={
        inputNome: '',
        nome : '',
        inputIdade: '',
        idade:'',
        sexo: 'Masculino',
        limite: 0,
        estudante: true
       }
       this.mostrar = this.mostrar.bind(this)
}


mostrar(){

    this.state.inputNome,
    this.setState({idade: this.state.inputIdade})
    
    alert("Nome: "+ this.state.inputNome +'\n' 
        + "Idade: " + this.state.idade)
   
    


}

    render(){
        return(

        <View style={myStyles.conteiner}>
            <Text style={myStyles.logo}>BANCO REACT</Text>
           
            <TextInput style={myStyles.textInput}
            placeholder="Digite sue nome"
            onChangeText={(texto)=> this.setState({inputNome: texto})}
            />

            <TextInput style={myStyles.textInput}
            placeholder="Digite sua idade"
            onChangeText={(year)=>this.setState({inputIdade: year})}
            />

            <Picker style={myStyles.picker}
            valueselectedValue={this.state.sexo}
            //onValueChange={()}
            >
            <Picker.Item  key={1} value={1} label="Masculino"/>
            <Picker.Item  key={2} value={2} label="Feminino"/>
            </Picker>


           <Slider style={myStyles.slider}
            minimumValue={0}
            maximumValue={2000}
            maximumTrackTintColor="red"
            value={1000}
            onValueChange={(valor)=>{this.setState({limite: valor})}}
           />
           <Text style={myStyles.textLimite}>Valor do Limite : R$ {this.state.limite.toFixed(2)}</Text>
            
            <View style={myStyles.switch}>
                
                <Switch 
                value={this.state.estudante}
                onValueChange={(valor)=>{this.setState({estudante: valor})}}
                thumbColor={(this.state.estudante)? 'blue': 'red'}
                
            
                />

                <Text>{(this.state.estudante)? 'Masculino':'Feminino'}</Text>

                
            </View>
            <Button style={myStyles.botao}
                title="Abrir Conta"
                onPress={this.mostrar}
            />
            <Text>{this.state.nome}</Text>
            
        </View>




        );
    }
}

const myStyles = StyleSheet.create({
    conteiner:{
        marginTop: 20,
        flex: 1,
        backgroundColor:'rgba(90, 117, 115, 0.96)'
    },
    logo:{
        margin: 20,
        padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        backgroundColor: 'rgba(240, 75, 10, 1)',
        color: 'blue',
        textAlign: 'center',
        borderColor: 'blue',
        borderWidth: 6
    },
    textInput:{
        margin: 20,
        fontSize: 20,
        paddingLeft: 10,
        borderWidth: 3,
        backgroundColor: 'rgba(220, 225, 226, 0.6)',
        borderRadius: 15
    },
    picker:{
        marginTop: 10,
        margin: 20,
        fontSize: 20,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(220, 225, 226, 0.6)',
    },
    slider:{
        alignItems: 'center',
        margin: 20,
        padding:20,
        backgroundColor: 'rgba(220, 225, 226, 0.6)',
        

    },
    textLimite:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    switch:{
        margin:5,
        alignItems: 'center',
       
    },
    botao:{
        margin: 10
    }
    
})

export default AppDesafio;