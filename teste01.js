/*teste recebendo dadso aula 20 */


import { Component } from "react";
import React,{View,Text, StyleSheet, FlatList} from "react-native";

import Pessoas from "./src/Pessoas";


class teste01 extends Component{

constructor(props){
    super(props)
    this.state={
        feed:[
            {id:'1', nome:'Gilson',idade:58, email:'gilson@gilson.com'},
            {id:'2', nome:'Cassia',idade:51, email:'cassia@cassia.com'},
            {id:'3', nome:'Laura',idade:17, email:'laura@laura.com'},
            {id:'4', nome:'Eduarda',idade:14, email:'eduarda@eduarda.com'},
        ]
    }
}


     render(){
    return(


        <View style={myStyles.conteiner}>
         
            <FlatList
            keyExtractor={(item)=>item.id}
            data={this.state.feed}
            renderItem={({item})=><Pessoas dados={item}/>}
            />

       </View>


    );
}

}





const myStyles = StyleSheet.create({
conteiner:{
    marginTop: 20,
    flex: 1,
    backgroundColor: 'green'
    },


})

export default teste01;