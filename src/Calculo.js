import React,{Component} from 'react';
import {View,TouchableOpacity,Text,Image,StyleSheet} from 'react-native';



export default class Calculo extends Component{

    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <View style={myStyles.conteiner}>

                <View style={myStyles.areaLogoFinal}>
                    <Image
                    source={require('../src/img/gas.png')}
                    style={myStyles.logoFinal}
                    />
                </View>
                
                <Text style={myStyles.textResposta}>
                   {this.props.result}
                </Text>

                <Text style={myStyles.textoFixo}>
                    Com os preços:
                </Text>

                <Text style={myStyles.vlrAlcool}>
                    Álcool R$ {this.props.alcool}
                </Text>

                <Text style={myStyles.vlrGas}>
                    Gasolina R$ {this.props.gas}
                </Text>

                <TouchableOpacity  onPress={this.props.sair} style={myStyles.areaTxtCalculo}>
                    <Text style={myStyles.calcularNovamnete}>
                        Calcular novamente
                    </Text>
                </TouchableOpacity>

            </View>


        )

    }
}

const myStyles= StyleSheet.create({

    conteiner:{
        flex: 1,
        backgroundColor: 'black'
    },
    areaLogoFinal:{
        marginTop: 90,
        alignItems: 'center' 

    },
    logoFinal:{
        
       
        height: 171
    },
    textResposta:{
        marginTop: 30,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'green'
    },

    textoFixo:{
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },

    vlrAlcool:{
        marginTop: 10,
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    },

    vlrGas:{
        marginTop: 3,
        textAlign: 'center',
        fontSize: 15,
         color: 'white'


    },

    areaTxtCalculo:{
       marginTop:50,
       marginLeft: 60,
       marginRight: 60,
        borderWidth: 5,
        borderColor: 'rgba(13, 83, 235, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'black',
        borderRadius: 4
    },

    calcularNovamnete:{
       margin:10,
        textAlign: 'center',
        color: 'rgba(238, 73, 8, 1)',
        fontWeight: 'bold'
        
    }



})