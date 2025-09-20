
import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,FlatList, ActivityIndicator} from "react-native";

import api from './src/services/api'
import Filmes from './src/Filmes'

export default function _45_Criando_Loading(){

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] =useState(true);


  useEffect(()=>{
    async function loadFilmes(){
      const resposta =await api.get('r-api/?api=filmes');
      //console.log(response.data)

      setFilmes(resposta.data);
      setLoading(false);
    }

     loadFilmes();
    
  },[]); 

  if(loading){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
      <ActivityIndicator color= '#21ee0eff' size={100}
      />
      <Text style={{marginTop: -60}}>Gilson</Text>
      </View>
    )
  }else{
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






}


const myStyles = StyleSheet.create({
  
  conteiner:{
    flex: 1,
    marginTop: 25
  }
})