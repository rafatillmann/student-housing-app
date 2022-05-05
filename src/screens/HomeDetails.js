import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeDetailsScreen({ route, navigation }) {

  const { item } = route.params;

  const [liked, setLiked] = useState()

  const handleFavorite = () => {
    setLiked(!liked)
    AsyncStorage.setItem('id_item', item.id)
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: item.foto }} />
      </View>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}> {item.nome} </Text>
          <Text> {item.endereco} </Text>
        </View>
        <View>
          <Pressable onPress={() => handleFavorite()}>
            <MaterialCommunityIcons
              name={liked ? 'heart' : 'heart-outline'}
              size={32}
              color={'#E14594'}
            />
          </Pressable>
          <MaterialCommunityIcons
            name={'map'}
            size={32}
            color={'#2B3595'}
          />
        </View>
      </View>

      <View style={styles.about}>

        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Descrição </Text>
          <Text> {item.descricao} </Text>
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Informações do alojamento </Text>
          <Text> {item.mobiliario} </Text>
          <Text> {item.tipo_moradia} </Text>
          <Text> {item.tipo_alojamento} </Text>
          <Text> {item.banheiro} </Text>
          <Text> {item.area} </Text>
          <Text> {item.area_comum} </Text>
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Contato </Text>
          <Text> {item.telefone} </Text>
          <Text> {item.email} </Text>
        </View>
       


        <Pressable onPress={() => Linking.openURL(item.video)}>
          <MaterialCommunityIcons
            name={'play-circle'}
            size={32}
            color={'#2B3595'}
          />
        </Pressable>
      </View>
      <View>
        <Text> {item.valor} </Text>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  about: {
    marginTop: 30,
    marginHorizontal: 10,
    display: 'flex',
    alignItems: 'flex-start',
  }
});
