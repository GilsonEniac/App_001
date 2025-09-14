


import { Component } from "react";
import React,{View, StyleSheet,ScrollView} from 'react-native';




class _25_ScrollView extends Component{
    render(){
        return(

            <View style={mySytles.conteiner}>
            {/* <ScrollView  showsVerticalScrollIndicator={false} ></ScrollView>     */}
            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
              <View style={mySytles.box1}> </View>
              <View style={mySytles.box2}> </View>
              <View style={mySytles.box3}> </View>
              <View style={mySytles.box4}> </View>
              <View style={mySytles.box5}> </View> 
            
            </ScrollView>

            </View>

        )
    }

}

const mySytles = StyleSheet.create({
conteiner:{
    flex:1,
    backgroundColor: 'rgba(241, 26, 241, 0.13)'
},

box1:{
    backgroundColor: 'red',
    height: 250,
    width: 150
},

box2:{
    backgroundColor: 'green',
    height: 250,
    width: 150
},


box3:{
    backgroundColor: 'yellow',
    height: 250,
    width: 150
},

box4:{
    backgroundColor: 'blue',
    height: 250,
    width: 150
},

box5:{
    backgroundColor: 'gray',
    height: 250,
    width: 150
},


})


export default _25_ScrollView;