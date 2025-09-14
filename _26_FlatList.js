import { Component } from "react";
import React,{View,StyleSheet, Text, FlatList} from "react-native";

import Pessoas from "./src/Pessoas";


class _26_FlatList extends Component{


constructor(props){
    super(props)
    this.state={
        feed: [
            {id: '1', nome: 'Gilson', idade: 58, email: 'gilson@gilson.com'},
            {id: '2', nome: 'Cassia', idade: 51, email: 'casia@cassia.com'},
            {id: '3', nome: 'Mateus', idade: 38, email: 'mateus@mateus.com'},
            {id: '4', nome: 'Laura', idade: 178, email: 'laura@laura.com'},
            

        ]


    }
}


    render(){
        return(


            <View style={myStyles.conteiner}>
                             
                <FlatList
                keyExtractor={(item)=> item.id} //Quando ja tem um ido flatlist ja identifica  caso contrario vc tem que informarqual será o id da lista
                data={this.state.feed} // a lista que o flatlista irá receber
                renderItem={({item})=><Pessoas dados={item}/>} //responsavel por exibir os itens da lista na tela
                />
                

            </View>

        );
    }
}





const myStyles = StyleSheet.create({

    conteiner: {
        flex: 1,
        margin:  20,
        backgroundColor: 'green'
    },
    

})


export default _26_FlatList;