
import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Produtos from "./src/components/produtos";
import DadosCadernos from "./dados/cadernos";
import DadosLapis from "./dados/lapis";
import DadosEstojos from "./dados/estojos";
import DadosDiversos from "./dados/diversos";


export default function Papelaria (){
  return(
    <View style={{backgroundColor:'#fff', flex:1}}>
      <Cabecalho/>
      
      <Text style={texto.titulo}> Cadernos </Text>

      <View>
        <FlatList
        horizontal = {true}
        data = {DadosCadernos}
        keyExtractor = {(item) => item.id}
        renderItem = { ({ item }) => (

        <Produtos
        imagem = {item.imagem}
        nome = {item.nome}
        valor = {item.valor}
        />
        )}

        />
      </View>

      <Text style={texto.titulo}> Lápis </Text>
      
      <View>
        <FlatList
        horizontal = {true}
        data = {DadosLapis}
        keyExtractor = {(item) => item.id}
        renderItem = { ({ item }) => (

        <Produtos
        imagem = {item.imagem}
        nome = {item.nome}
        valor = {item.valor}
        />
        )}

        />
      </View>

      <Text style={texto.titulo}> Estojos </Text>
      
      <View>
        <FlatList
        horizontal = {true}
        data = {DadosEstojos}
        keyExtractor = {(item) => item.id}
        renderItem = { ({ item }) => (

        <Produtos
        imagem = {item.imagem}
        nome = {item.nome}
        valor = {item.valor}
        />
        )}

        />
      </View>

      <Text style={texto.titulo}> Diversos </Text>
      
      <View>
        <FlatList
        horizontal = {true}
        data = {DadosDiversos}
        keyExtractor = {(item) => item.id}
        renderItem = { ({ item }) => (

        <Produtos
        imagem = {item.imagem}
        nome = {item.nome}
        valor = {item.valor}
        />
        )}

        />
      </View>

    </View>
  )
}

const texto = StyleSheet.create({
  titulo: {
      color:'white',
      fontSize: 24,
      fontWeight:'normal',
      fontFamily: 'Lucky Skirt (DEMO).ttf',
      textAlign: 'center',
      textTransform: 'uppercase',
      backgroundColor: '#1D5B4C',
      width: 180,
      borderRadius: 10,
      alignSelf: 'center',
  },

})