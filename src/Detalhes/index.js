import React from "react";
import { View,Text, StyleSheet,  TouchableOpacity } from "react-native";




export default function Detalhes(props){
return(
    
    <View style={myStyles.conteiner}>
        
        <View style={myStyles.modalConteiner}>
        
            <TouchableOpacity style={myStyles.btnVoltar} onPress={props.voltar}>
                <Text style={myStyles.textoBtn}>Voltar</Text>
            </TouchableOpacity>

            <Text style={myStyles.titulo}> {props.ffilmes.nome}</Text>
            <Text style={myStyles.sinopse}>Sinopse</Text>
            <Text style={myStyles.descricao}>{props.ffilmes.sinopse}</Text>

        </View>

    </View>

)


}

const myStyles = StyleSheet.create({
    conteiner:{
        flex: 1,
        marginLeft: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
       // backgroundColor: 'rgba(36, 26, 27, 0.72)'
    },
    modalConteiner:{
        width: '80%', //Se não passar ele vai se ajustar a largura do texto 
        height: '80%',
        backgroundColor: 'rgba(36, 26, 27, 0.81)',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    
    },
    textoBtn:{
        color:'white',
        fontSize: 16
    },
    btnVoltar:{
        backgroundColor: 'red',
        padding: 10,
         borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        
    },
    titulo:{
        textAlign: 'center',
        color: 'white',
        fontSize: 28,
        padding: 10,
        fontWeight: 'bold',

    },
    sinopse:{
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10,
    },
    descricao:{
        color: 'white',
        marginLeft: 10,
        marginRight: 10

    },
})