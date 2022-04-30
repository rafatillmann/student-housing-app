import * as React from 'react';
import { View, Text, Image, Button, BackHandler, StyleSheet, ScrollView } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}>
        <Image style={styles.image} source={require('../../assets/house.png')}/>
          <Text style={styles.text}>Moradias Estudantis</Text>
        </View>
        <View style={styles.button}>
          <Button title="Ver moradias" onPress={() => navigate('HomeList')} color='black' />
        </View>
        <View style={styles.button}>
          <Button title="Sair" onPress={() => BackHandler.exitApp() } color='black'/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  image:{
    height:200,
    width:200
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logo: {
    height: 160,
    width: 160,
  },
  text: {
    padding: 30,
    fontSize: 36,
    textAlign: 'center'
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 15
  }
});