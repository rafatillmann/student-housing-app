import * as React from 'react';
import { Button, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import data from '../../home.json';

export default function HomeListScreen({navigation}) {

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imgbox}>
        <Image style={{height:150, aspectRatio:1.5, borderRadius:10}} source={{uri: item.foto}}></Image>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text>{item.endereco}</Text>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('HomeDetails', {item: item})}>
        <Text style={styles.text}>Ver detalhes</Text>
      </Pressable>
    </View>
    
  );

    return (
      <>
        <FlatList
          data={data}
          renderItem={renderItem}    
        />
        <Button title="Voltar" onPress={() => navigate('Home')} color='black' />
      </>
    );
  }

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  card: {
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 16,
    backgroundColor: "#D6D6D6",
    padding: 20
  }, 
  imgbox: {
    alignItems: 'center',
    marginBottom: 15
  }, 
  title: {
    fontWeight: 'bold',
    fontSize: 16
  }, 
  content: {
    marginBottom: 15
  }, 
  button: {
    backgroundColor: '#7045AF',
    padding: 10,
    borderRadius: 10,
    width: 110,
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
})