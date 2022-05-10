import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons, AntDesign, MaterialIcons, EvilIcons,
    Entypo, Feather, FontAwesome, Fontisto, FontAwesome5, Zocial,
    Foundation, Octicons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';

export default function Produtos(){
    return(
        <TouchableOpacity style={containerProduto}>
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />
    
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>
    )
}
const estilo = StyleSheet.create({
    containerProduto:{
        backgroundColor:'#E2C5F0',
        borderRadius: 3,
        
    }
})