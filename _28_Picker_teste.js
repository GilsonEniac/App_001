import { Component } from "react";
import React,{View,Text,StyleSheet} from "react-native";
import {Picker} from '@react-native-picker/picker';




class _28_Picker_teste extends Component{

    constructor(props){
        super(props)
        this.state={
            pizza : 0,
            pizzas:[
                {key: 1, nome:'Calabreza', valor:45},
                {key: 2, nome: 'Brigadeiro', valor: 34.90},
                {key: 3, nome: 'Quatro Queijos', valor: 23.88}
            ]
        }
    }


    render(){

        let itemPizza = this.state.pizzas.map((v,k)=> {return <Picker.Item key={k} value={k} label={v.nome}/>})

        return(
            <View style={myStyles.conteiner}>
                <Text style={myStyles.logo}>MENU PIZZAS</Text>

                <Picker
                selectedValue={this.state.pizza}
                onValueChange={(valorItem,chaveItem)=>this.setState({pizza: valorItem})}
                >
                   
                {itemPizza}

                </Picker>


                <Text style={myStyles.pizza}>Você escolheu : {this.state.pizzas[this.state.pizza].nome}</Text>
                <Text style={myStyles.pizza}>Valo de R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
            </View>

        )
    }

}


const myStyles = StyleSheet.create({
conteiner:{
        marginTop: 25,
        flex: 1,
        backgroundColor: 'rgba(123, 30, 230, 1)'
    },
logo:{
        margin: 20,
        backgroundColor: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },

pizza:{
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center'
}
})

export default _28_Picker_teste;
 
