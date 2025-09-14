 import React,{Component} from 'react';
import {View,StyleSheet,Text, Button, Modal} from 'react-native';

import Entrar from './src/Entrar'

class _36_Aplicando_Modal extends Component{

constructor(props){
    super(props)
    this.state={
     modalVisible:false,
    }

this.abrir =this.abrir.bind(this)
this.fechar=this.fechar.bind(this)

}


abrir(){
   this.setState({modalVisible: true});
}

fechar(visible){
    this.setState({modalVisible: visible});
}



    render(){
        return(
            <View style={myStyles.conteiner}>

                <Button
                title='Abrir'
                onPress={this.abrir}
                />

                <Modal animationType='slide' transparent={true} visible={this.state.modalVisible} >
                    
                     <View style={myStyles.areaModal}>
                        <Entrar sair={()=>this.fechar(false)}></Entrar>
                    </View>

                </Modal>
              
              
            </View>
        )
    }
}


const myStyles =StyleSheet.create({
    conteiner:{
     
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
  
areaModal:{
    margin: 30,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center'
}


   
})

export default _36_Aplicando_Modal;