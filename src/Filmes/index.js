import React,{useState} from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity, Modal} from 'react-native';

import Detalhes from '../Detalhes';

//export default function Filmes(props){ posso receber atraves da propriedades o "dados" aqui tenho que usara props.dados.nome exemplo
export default function Filmes({dados}){ // posso desconstruir trazendo diretamente o dados assim não preciso usara props.dados.nome
   
const [visibleModal, setVibleModal] = useState(false)   
   
    return(

        <View>
        
            <View style={myStyles.card}>

                <Text style={myStyles.titulo}>{dados.nome}</Text>
            
                <Image style={myStyles.foto}
                source={{uri: dados.foto}}
                />

                <View style={myStyles.areaBtn}>
                    <TouchableOpacity style={myStyles.botao} onPress={()=> setVibleModal(true)}>
                        <Text style={myStyles.textBtn}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Modal transparent={true} animationType='slide' visible={visibleModal}>
                <Detalhes ffilmes={dados} voltar={()=>setVibleModal(false)}/>
            </Modal>
        
        </View>
    
    );

    
}

const myStyles = StyleSheet.create({
        card:{
            flex: 1,
            backgroundColor: '#FFF',
            margin: 15,
            elevation: 5
        },

        titulo:{
            padding: 15,
            fontSize: 18,
            fontStyle: 'italic'
        },
        foto:{
            height: 250, //Se nãão informa a largura a imaagem pega toda a extensão do card
            zIndex: 2 //Fica na frente quando maior o numero mais na frente fica
        },
        areaBtn:{
            alignItems: 'flex-end',
           marginTop: -45,
            zIndex: 3

        },
         botao:{
            backgroundColor: 'rgba(19, 94, 233, 1)',
            width: 100,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            padding: 8,
            opacity: 4,
            
        },
        textBtn:{
            color: 'white',
            textAlign: 'center'

        }
    })