import React,{Component} from 'react';
import{View,Text,Button,TouchableOpacity,StyleSheet,Modal,Image,TextInput} from 'react-native';

import Calculo from './src/Calculo';


export default class _37_App_CalculaCombustivel extends Component{

constructor(props){
    super(props)
    this.state={
        inputAlcool: '',
        inputGas: '',
        alcool : '',
        gas:'',
        result :'',
        modalVisible: false
        

    }
    this.limpar = this.limpar.bind(this)
    this.retornar =this.retornar.bind(this)
    this.calculo = this.calculo.bind(this)
}

retornar(visible){
    

    this.setState({modalVisible: visible})
    
}

calculo(){
    this.setState({alcool: this.state.inputAlcool})
    this.setState({gas: this.state.inputGas})
    
    this.setState({inputGas: ''})
    

    let  rs = (this.state.alcool / this.state.gas)

    if(rs < 0.7){
        this.setState({result : 'Alcool é a melhor opção'})
        this.setState({inputAlcool:''})
        
    }else{
        this.setState({result: "Gasolina é a melhor opção"})
    }
    
    this.setState({modalVisible: true})
   
  }

    limpar(vl1,vlr2){
        this.setState({inputAlcool:''})
        this.setState({inputGas: ''})

}

    render(){
    return(

        <View style={MyStyles.conteiner}>
            <View style={MyStyles.areaLogo}>
                <Image
                source={require('./src/img/logo2.png')}
                style={MyStyles.logo}
                />
                <Text style={MyStyles.textPergunta}>Qual a melhor opção?</Text>
            </View>
           
            <Text style={MyStyles.labelCombustivel}>Ácool preço por litro' </Text>
           
            <TextInput style={MyStyles.input}
            placeholder='Digite o preço do litro'
            onChangeText={(vlr)=> this.setState({inputAlcool: vlr})} 
            
            />
             <Text style={MyStyles.labelCombustivel}>Gasolina preço por litro' </Text>
           
            <TextInput style={MyStyles.input}
            placeholder='Digite o preço do litro'
           onChangeText={(vlr)=> this.setState({inputGas: vlr})} 
            
            />
            <View style={MyStyles.areaBtn}>
            <TouchableOpacity
             onPress={this.calculo }
            >
                <Text style={MyStyles.textBtn}> Calcular</Text>
            </TouchableOpacity>
            </View>
                {/* slide */}
                <Modal animationType='fade' transparent={false} visible={this.state.modalVisible} >
                                
                    <View style={MyStyles.areaModal}>
                
                         <Calculo sair={()=>this.retornar(false)} alcool={this.state.alcool } gas={this.state.gas} result={this.state.result}></Calculo> 
                    </View>
            
                </Modal>
                          

        </View>

    );
}



}

const MyStyles = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: 'rgba(13, 13, 14, 1)'
    },
    areaLogo:{
        marginTop: 80,
       
        alignItems: 'center'

    },
    logo:{
        width: 180,
        height: 180
    },
    labelCombustivel:{
        marginTop:10,
        marginLeft: 15,
        fontSize: 14,
        textAlign: 'left',
        color: 'white',
        fontStyle: 'italic'
    },
    input:{
        padding: 10,
        fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 5,
        width: 380,
        marginTop: 3,
        marginLeft: 15
       
    },
    textPergunta:{
        marginTop: 30,
        marginBottom: 60,
        fontSize: 25,
        color: 'white',
        fontWeight:'bold'
    },
    areaBtn:{
        margin: 15,
        backgroundColor: 'rgba(247, 54, 6, 0.94)',
        borderRadius: 5,
        height: 38,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },

    textBtn:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },

    areaModal:{
        flex: 1,
        backgroundColor: 'red'

    }



})