
import { FlatList, StyleSheet, Text, View, Lis } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Produtos from "./src/components/produtos";
import Dados from "./dados/produtos"

export default function Papelaria (){
  return(
    <View style={{backgroundColor:'#fff', flex:1}}>
      <Cabecalho/>
      <View>
        <FlatList> 
          horizontal = {true}
          data = {Dados}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

          <Produtos
          nome = {item.nome}
          imagem = {item.imagem}
          desc = {item.marca}
          />
          )}
        </FlatList>
      </View>
    </View>
  )
}