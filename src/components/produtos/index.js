import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons, AntDesign, MaterialIcons, EvilIcons,
    Entypo, Feather, FontAwesome, Fontisto, FontAwesome5, Zocial,
    Foundation, Octicons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';

export default function Produtos({nome, imagem, valor}){
    return(
        <TouchableOpacity style={estilo.containerProduto}>
            <Text style={estilo.nome}>{nome}</Text>
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />
    
            
            <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>
    )
}
const estilo = StyleSheet.create({
    containerProduto:{
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        margin: 2, 
        justifyContent: 'space-between',
        width: 180,
        height: 210,
        marginLeft: 8,
        marginBottom: 25,
        shadowRadius: 8,
        shadowColor: 'black'
        
    },

    nome: {
        color:'black',
        fontSize: 16,
        fontWeight:'normal',
        textAlign: 'left',
        fontFamily: 'Arial'
    },

    valor: {
        color:'#105F4E',
        fontSize: 12,
        marginLeft: 110,
        marginTop: 2,
        fontWeight:'bold',
    },

    images: {
        width: '70%',
        height: '60%',
        borderRadius: 3,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'center'
    },
})