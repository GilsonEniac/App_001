import {Component} from 'react'
import React,{View, Text, StyleSheet, Image, Button} from 'react-native'


class Tudao extends Component{

    constructor(props){
        super(props)
        
        this.state = {nome: ''}

        this.entra = this.entra.bind(this)

    }


    entra(nome){
        this.setState({nome :nome})
    }


    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#555', marginBottom:20,}}>
              
                
                <View style={myStyles.area1}>
                    <Text style={myStyles.txt}>ola mundo velho</Text>
                </View>
                
                <View style={myStyles.resposta}>
                    <View style={myStyles.area2}>
                        <Text style={myStyles.txt1}>{this.state.nome}</Text>
                    </View>
                          
                </View>
                <Jobs altura={200} largura={500}/>
                <Button title='ENTRAR' onPress={()=>this.entra('STEVE JOBS')}/>
            
                <View style={myStyles.areaPink}>
                    <View style={{height:50, width: 50, backgroundColor: 'red'}}></View>
                    <View style={{height:50, width: 50, backgroundColor: 'green'}}></View>
                    <View style={{height:50, width: 50, backgroundColor: 'yellow'}}></View>
                </View>
                
            </View>
          
             
        )  
    }
}


const myStyles = StyleSheet.create({

areaPink:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'pink'

},    

resposta:{
    backgroundColor: 'black',
  flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
},

 area1:{
    marginTop: 80,
   
    backgroundColor: 'red'
                },

 area2:{
    height: 45,
    width: 200,
    marginTop: 10,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
                 },

 txt:{
    textAlign:'center',
    fontSize: 20,
    color: 'yellow'
                },

 txt1:{
    textAlign:'center',
    fontSize: 20,
    color: 'white'
                }

}
)



class Jobs extends Component{
  render(){
  
    let img='https://sujeitoprogramador.com/steve.png'

    return(
      <Image
        source={{uri: img}}
        style={{width: this.props.largura, height: this.props.altura}}
      />
    );
  }
}





export default Tudao