import React,{ Component } from "react";
import {View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";





class Lista extends Component{

    constructor(props){
        super(props)
        this.state={
            feed: this.props.dados,
            
        }
      this.mostraLikers = this.mostraLikers.bind(this)
      this.likes=this.likes.bind(this)
      this.carregaIcone =this.carregaIcone.bind(this)
    }

   
   
   
    carregaIcone(like){

        if(like===true){
            return require('../img/likeada.png')
        }else
            return require('../img/like.png')
        //return like ? require('../img/likeada.png') : require('../img/like.png')
       

      
       
    }

   
   
   
   
    likes(lik){
        let feed = this.state.feed;

        if(feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada:false,
                    likers: feed.likers -1
                }
            });
        }else{
            this.setState({
                feed:{
                    ...feed,
                    likeada:true,
                    likers: feed.likers + 1

                }
            });
        }

    }

    mostraLikers(){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }
        return(

            <Text style={myStyles.likes}>
                {feed.likers} {feed.likers > 1? 'Curtidas':'Curtida'}
            </Text>
        )


    }


    render(){
        return(
            <View style={myStyles.areaFeed}>
               
                <View style={myStyles.viewPerfil}>
               
                    <Image
                    style={myStyles.fotoPerfil}
                    source={{uri: this.state.feed.imgperfil}}
                    
                    />
                    <Text style={myStyles.nomeUsuario}> 
                    {this.state.feed.nome}
                    </Text>
               
                </View>

                <Image
                resizeMode="cover"
                style={myStyles.fotoPublicacao}
                source={{uri: this.state.feed.imgPublicacao}}
             
                />
             
             <View style={myStyles.areaBtn}>
                
               <TouchableOpacity onPress={this.likes}>
                    <Image
                    style={myStyles.iconeLike}
                    source={this.carregaIcone(this.state.feed.likeada)}
                    />
                </TouchableOpacity>
                
                 <TouchableOpacity style={myStyles.btSend}>
                    <Image
                    style={myStyles.iconeLike}
                    source={require('../img/send.png')}
                    />
                </TouchableOpacity>
                
                
             </View >
             
             
                {this.mostraLikers(this.state.feed.likers)}
          

             <View style={myStyles.viewRodape}>
                <Text style={myStyles.nomeRodape}>
                    {this.state.feed.nome}
                </Text>
              
                <Text style={myStyles.descricao}>
                    {this.state.feed.descricao} 
                </Text>
             </View>

                          
            </View>
        );
    }
}


const myStyles = StyleSheet.create({
   
    areaFeed:{
        marginBottom: 20
       

    },
    viewPerfil:{
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center'

    },
    fotoPerfil:{
        marginRight: 10,
        height:50,
        width: 50,
        borderRadius: 25,
      
        borderColor: 'green',
        borderWidth: 3

    },
    nomeUsuario:{
        fontSize: 22,
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'bold'

    },
    fotoPublicacao:{
        flex: 1,
        height: 400,
        alignItems: 'center'

    }, 
    areaBtn:{
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike:{
        width: 33,
        height: 33
    },
    btSend:{
        paddingLeft: 5
    },
    viewRodape:{
        flexDirection: 'row',
        alignItems: 'center'

    },
    descricao:{
        paddingLeft: 20,
        fontSize: 15,
        color: '#000',
        fontStyle: 'italic'

    },
    nomeRodape:{
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 5
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 5
    }

})

export default Lista;