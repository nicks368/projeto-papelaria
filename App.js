
import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Produtos from "./src/components/produtos";




export default function Papelaria (){
  return(
    <View style={{backgroundColor:'#fff', flex:1}}>
      <Cabecalho/>
      <View>
        <Produtos></Produtos>
      </View>
    </View>
  )
}