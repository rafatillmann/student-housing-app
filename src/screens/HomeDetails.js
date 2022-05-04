import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Pressable, Image } from 'react-native';

export default function HomeDetailsScreen({ route, navigation }) {

  const { item } = route.params;

  const [liked, setLiked] = useState()

  const handleFavorite = () => {
    setLiked(!liked)
    AsyncStorage.setItem('id_item', item.id)
  }

  return (
    <View>
      <View style={styles.container}>
        <Pressable onPress={() => handleFavorite()}>
          <MaterialCommunityIcons
            name={liked ? 'heart' : 'heart-outline'}
            size={32}
            color={'#E14594'}
          />
        </Pressable>
      </View>
      <View style={styles.button} >
        <Pressable onPress={() => navigation.navigate('HomeList')}>
          <Text>Voltar</Text>
        </Pressable>
      </View>
      <Image sou></Image>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  contactDetails: {
    fontSize: 16,
    height: 44,
  },
  button: {
    padding: 15
  }
});
