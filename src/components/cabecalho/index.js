import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons, AntDesign, MaterialIcons, EvilIcons,
    Entypo, Feather, FontAwesome, Fontisto, FontAwesome5, Zocial,
    Foundation, Octicons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';

export default function Cabecalho(){
return(
    
    <View style={estilo.header}>
        <Ionicons name="menu" size={30} color="white" />
        <Text style ={estilo.Texto}> Papelaria LRN </Text>
        
        <MaterialIcons name="account-circle" size={30} color="white" />
        
    </View>

);
}
const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#27B395',
        borderRadius:2,
        marginTop:8,
        width:'99,9%',
        padding:20,
        margin:2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20

    },
    Texto:{
        color:'white',
        marginLeft:20,
        alignItems: 'center',
        fontSize:20,
        fontWeight:'bold'
    }

})