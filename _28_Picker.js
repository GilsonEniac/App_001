import { Component } from "react";
import React,{View,Text,StyleSheet} from "react-native";
import {Picker} from '@react-native-picker/picker';



class _28_Picker extends Component{

    constructor(props){
        super(props)
        this.state={
            pizza: 0,
            pizzas:[
                {key: 1, nome:'Calabreza', valor: 59.90},
                {key: 2, nome:'Quatro Queijo',valor: 44.20},
                {key: 3, nome:'Strogonoff', valor: 30},
                {key: 4, nome:'Portuguesa', valor: 23}
            ]
        }
    };

    render(){

        let  pizzasItem = this.state.pizzas.map((v, k)=>{return <Picker.Item key={k} value={k} label={v.nome}/>} );

        return(
            
            <View>

                <Text style={myStyles.logo}> MENU PIZZAS</Text>
            
                <Picker
                selectedValue={this.state.pizza}
                onValueChange={(valorItem, indexItem)=> this.setState({pizza: valorItem})}
                >
                {pizzasItem}
                    
                </Picker>

                <Text style={myStyles.pizzas}>Você escolheu : {this.state.pizzas[this.state.pizza].nome}</Text>
                <Text style={myStyles.pizzas}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>

             


            </View>
        )
    }
}

const myStyles = StyleSheet.create({
    logo:{
        backgroundColor: 'green',
        marginTop: 25,
        textAlign: "center",
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    },
    pizzas:{
        marginTop: 30,
        fontSize: 20,
        textAlign:'center'
    }
})

export default _28_Picker;