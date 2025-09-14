import {Component} from 'react'
import React,{View, Text} from 'react-native'


class Flexbox_Alinhamento extends Component{
render(){
  return(

<View style={{flex:1, marginTop:20, 
                      flexDirection: 'row', 
                     alignItems:'center',
                      justifyContent:'space-between'
  }}>

<View style={{height: 50, width: 50, backgroundColor: 'red'}}></View>

<View style={{height: 50, width: 50, backgroundColor:'green'}}></View>

<View style={{height: 50, width: 50, backgroundColor: 'yellow'}}></View>

</View>

)

  
}
}

export default Flexbox_Alinhamento