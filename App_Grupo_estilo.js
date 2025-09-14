import { Component } from "react";
import React,{View, Text, StyleSheet} from "react-native";


class App_Grupo_estilo extends Component{
  render(){
    return(
      <View style={myStyles.area}>
      <Text style={[myStyles.cenrtalizaTxt, myStyles.txtPrincipal]}>Gilson Moura</Text>
      <Text style={myStyles.txtPrincipal}>Gilson Moura</Text>
      <Text>Gilson Moura</Text>
      <Text style={myStyles.cenrtalizaTxt}>Gilson Moura</Text>
      </View>
    )
  }
}


const myStyles =StyleSheet.create({

area:{
marginTop:50,
backgroundColor:'green'
},

txtPrincipal:{
color:'grey',
fontSize:20
},
cenrtalizaTxt:{
  textAlign: 'center'
}


})






export default App_Grupo_estilo