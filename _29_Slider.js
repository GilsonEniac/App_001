import {Component} from 'react';
import React,{View,Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';



class _29_Slider extends Component{

    constructor(props){
        super(props)
        this.state={
            valor: 0 //valor : 40


        }
    }



    render(){
        return(

            <View style={myStyles.conteiner}>
                <Text>Cade o mundo </Text>
                
                <View style={myStyles.areaSlider}>
                
                    <Slider
                    onValueChange={(val)=> this.setState({valor: val})}
                    maximumValue={100}
                    minimumValue={0}
                    value={this.state.valor}
                    minimumTrackTintColor='red'
                    maximumTrackTintColor='yellow'
                    />
                    
                </View>
                <Text style={myStyles.valor}> {this.state.valor.toFixed(1)}</Text>
            </View>

        )
    }
}


const myStyles = StyleSheet.create({
conteiner:{
    marginTop: 25,
    flex: 1,
    backgroundColor: 'rgba(12, 235, 23, 0.2)'  
},
areaSlider:{
    margin: 40,
    padding:20,
    backgroundColor: '#F123'
},

valor: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green'
}

})

export default _29_Slider;


