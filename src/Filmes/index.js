import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

//export default function Filmes(props){ posso receber atraves da propriedades o "dados" aqui tenho que usara props.dados.nome exemplo
export default function Filmes({dados}){ // posso desconstruir trazendo diretamente o dados assim não preciso usara props.dados.nome
    return(

        <View style={myStyles.conteiner}>
            <Text style={myStyles.texto}>{dados.nome}</Text>
        </View>
    
    
    );

    
}

const myStyles = StyleSheet.create({
        conteiner:{
            flex: 1
        },

        texto:{
            fontSize: 20
        }
    })