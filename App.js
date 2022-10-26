import * as react from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      
      <Text style={estilo.titulo}>Melhores motos</Text>
      <Text style={estilo.subTitulo}>Estas são as melhores das melhores</Text>
      <ScrollView>


      <Text style={estilo.serie}>Harley Davidson Fat-Boy</Text>
      <View style={estilo.imagem}>
         <Image style={estilo.img} source={require("./assets/fat_boy.jpg")}/>
      </View>



      <Text style={estilo.serie}>harley davidson v rod</Text>
      <View style={estilo.imagem}>
      <Image style={estilo.img} source={require("./assets/moto.jpg")}/>
      </View>


      <Text style={estilo.serie}>harley davidson classic</Text>
      <View style={estilo.imagem}>
      <Image style={estilo.img} source={require("./assets/classic.jpg")}/>
      </View>


      </ScrollView>
    </View>  );
}

const estilo = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor: '#000',
  justifyContent: 'center',
  },

  titulo:{
    fontSize:40,
    color:"#fff",
    fontWeight:"900",
    marginBottom:10,
    marginTop:30,
    textAlign:"center",
  },

  subTitulo:{
    fontSize:25,
    paddingBottom:10,
    color:"#fff",
    marginHorizontal:2,
    textAlign:"center",
  },

  img:{
    width:300,
    height:400,
  },

  serie:{
    fontSize:19,
    marginTop:20,
    marginBottom:10,
    textAlign:"left",
    color:"#fff",
  },
  imagem:{
    alignItems:"center",
  }
})