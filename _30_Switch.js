import { Component } from "react";
import React,{View,Text,StyleSheet,Switch} from "react-native";



class _30_Switch extends Component{

constructor(props){
    super(props)
    this.state={
        estado: true,
        estado2: false
    }
}

    render(){
        return(
            <View style={myStyles.conteiner}>

                        

                <Switch
                value={this.state.estado}
                onValueChange={(valor)=> this.setState({estado: valor})}
                thumbColor={(this.state.estado)? 'green': 'red'}
                />

                   <Text>{(this.state.estado) ? 'Ativo': 'Inativo'}</Text>

                   <Switch
                value={this.state.estado2}
                onValueChange={(valor)=> this.setState({estado2: valor})}
                thumbColor={(this.state.estado2)? 'gray': 'blue'}
                />

                   <Text>{(this.state.estado2) ? 'Ativo': 'Inativo'}</Text>



            </View>

        )
    }
}

const myStyles = StyleSheet.create({
    conteiner:{
        alignItems: 'center',
        marginTop: 25,
        flex: 1,
        backgroundColor: 'rgba(13, 171, 233, 0.82)'
    }
})

export default _30_Switch;