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
        <View style={styles.endereco}>
          <Image style={styles.mapicon} source={require('../../assets/map_icon.png')}/>
          <Text>{item.endereco}</Text>
        </View>
        <View style={styles.preco}>
          <Image style={styles.moneyicon} source={require('../../assets/money.png')}/>
          <Text style={styles.contentvalor}>{item.valor}</Text>
        </View>
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
        <Button title="Voltar" onPress={() => navigation.navigate('Home')} color='#182952' />
      </>
    );
  }

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    marginHorizontal: 35,
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
    fontSize: 16,
    color: '#182952'
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
  }, 
  endereco: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 5
  },
  preco: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 5
  },
  mapicon: {
    marginRight: 5
  },
  moneyicon: {
    marginRight: 6,
    marginLeft: 3
  },
  contentvalor: {
    fontWeight: 'bold',
    color: '#182952'
  }
})