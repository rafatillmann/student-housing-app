import * as React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import data from '../../home.json';

export default function HomeListScreen() {

  const renderItem = ({ item }) => (
    <Text>{item.nome}</Text>
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
  contact: {
    fontSize: 18,
    height: 44,
  }
})