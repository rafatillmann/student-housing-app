import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, View, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

export default function HomeDetailsScreen({ route, navigation }) {

  const { item } = route.params;

  const [liked, setLiked] = useState()

  useEffect(() => {
    AsyncStorage.getItem(`${item.id}`).then(value => value
      && setLiked(true) )
  })


  const handleFavorite = () => {
    AsyncStorage.setItem(`${item.id}`, JSON.stringify(item))
    setLiked(true)
  }

  const handleNotFavorite = () => {
    AsyncStorage.removeItem(`${item.id}`)
    setLiked(false)
  }

  const handleStorage = (item) => {
  
    AsyncStorage.getItem(`${item.id}`).then(value => value
      ? handleNotFavorite()
      : handleFavorite())

  }

  const [loaded] = useFonts({
    Nunito: require('../../assets/fonts/Nunito-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: item.foto }} />
      </View>

      <View style={styles.icons}>
        <View style={styles.flex_icon}>
          <Pressable style={styles.icon} onPress={() => handleStorage(item)}>
            <MaterialCommunityIcons
              name={liked ? 'heart' : 'heart-outline'}
              size={40}
              color={'#E14594'}
            />
          </Pressable>
          <Pressable style={styles.icon}>
            <MaterialCommunityIcons
              name={'map'}
              size={40}
              color={'#2B3595'}
            />
          </Pressable>

        </View>
      </View>


      <View style={styles.header}>
        <Text style={{ fontFamily: 'Nunito', fontSize: 24, fontWeight: '700', color: '#182952' }}> {item.nome} </Text>
        <Text style={{ fontFamily: 'Nunito', fontSize: 16 }}> {item.endereco} </Text>
        <Text style={{ fontFamily: 'Nunito', fontSize: 32, fontWeight: '700', marginTop: 5, color: '#182952' }}> {item.valor} </Text>
      </View>

      <View style={styles.about}>

        <View style={styles.description}>
          <Text style={styles.sub_title}> Descrição </Text>
          <Text style={styles.text}> {item.descricao} </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.sub_title}> Informações do alojamento </Text>
          <Text style={styles.text}> Mobiliario: {item.mobiliario} </Text>
          <Text style={styles.text}> Tipo de Moradia: {item.tipo_moradia} </Text>
          <Text style={styles.text}> Tipo de alojamento: {item.tipo_alojamento} </Text>
          <Text style={styles.text}> Banheiro: {item.banheiro} </Text>
          <Text style={styles.text}> Área: {item.area} </Text>
          <Text style={styles.text}> Área Comum: {item.area_comum} </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.sub_title}> Contato </Text>
          <Text style={styles.text}> {item.telefone} </Text>
          <Text style={styles.text}> {item.email} </Text>
        </View>


        <View style={{ marginTop: 20 }}>
          <Text style={styles.sub_title}> Mais detalhes </Text>
          <Pressable onPress={() => Linking.openURL(item.video)}>
            <MaterialCommunityIcons
              name={'play-circle'}
              size={32}
              color={'#2B3595'}
            />
          </Pressable>
        </View>
      </View>

    </ScrollView >
  );
}


const styles = StyleSheet.create({
  container: {

  },
  image: {
    aspectRatio: 1.5
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 20,
    marginLeft: 10
  },
  icons: {
    position: 'absolute',
    marginTop: 210,
    right: 0
  },
  flex_icon: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,
    marginRight: 10
  },
  about: {
    marginTop: 20,
    marginHorizontal: 10,
    display: 'flex',
    alignItems: 'flex-start',
  },
  sub_title: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: '700',
    color: '#182952',
    marginBottom: 10
  },
  text: {
    fontFamily: 'Nunito',
    marginBottom: 5
  }
});
