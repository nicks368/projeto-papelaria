import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons, AntDesign, MaterialIcons, EvilIcons,
    Entypo, Feather, FontAwesome, Fontisto, FontAwesome5, Zocial,
    Foundation, Octicons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';

export default function Produtos(nome, imagem, desc){
    return(
        <TouchableOpacity style={estilo.containerProduto}>
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />
    
            <Text style={estilo.titulo}>{nome}</Text>
            <Text style={estilo.valor}>{desc}</Text>
        </TouchableOpacity>
    )
}
const estilo = StyleSheet.create({
    containerProduto:{
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
        height: 150,
        marginLeft: 8,
        marginBottom: 5,
    },
    nome: {
        color:'black',
        fontSize: 14,
        fontWeight:'bold',
    },
    valor: {
        color:'green',
        fontSize: 12,
        marginLeft: 29,
        marginTop: 2,
        fontWeight:'bold',
    },
    images: {
        width: '100%',
        height: 75,
        borderRadius: 3,
    },
})