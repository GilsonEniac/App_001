import React,{Component} from 'react';
import {View,StyleSheet,Text, Button, Modal} from 'react-native';



export default class Entrar extends Component{ 


    render(){
        return(
            <View >
                    
                    <View style={myStyles.areaModal}>

                     <Text style={myStyles.texModal}> Seja Bem Vindo</Text>
                                             
                       <View style={myStyles.areaBtn}>
                            <Button
                              title='Fechar'
                              onPress={this.props.sair}
                            />
                        </View>

                    </View>
            
            </View>
        )
    }
}


const myStyles =StyleSheet.create({
   areaModal:{
      
        width: '100%',
        height: 350,
        backgroundColor: '#292929',
        borderRadius: 15
    },

    texModal:{
       
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },

    areaBtn:{
        paddingTop: 200,
       margin: 50
    }




   
})

