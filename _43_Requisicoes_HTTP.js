
import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";

import api from './src/services/api'
import Filmes from './src/Filmes/'

export default function _43_Requisicoes_HTTP(){

  const [filmes, setFilmes] = useState([]);


  useEffect(()=>{
    async function loadFilmes(){
      const response =await api.get('r-api/?api=filmes')
      //console.log(response.data)

      setFilmes(response.data);


    }
     loadFilmes();
    
  },[]);


return(
    <View style={myStyles.conteiner}>

        <FlatList
        keyExtractor={(item)=> String(item.id)}
        data={filmes}
        renderItem={({item})=><Filmes dados={item}/>}

        />

    </View>

);



}


const myStyles = StyleSheet.create({
  conteiner:{
    flex: 1,
   
  }
})