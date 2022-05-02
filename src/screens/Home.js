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
          <Image style={styles.image} source={require('../../assets/house_in.png')}/>
        </View>
        <View style={styles.button}>
          <Button title="Ver moradias" onPress={() => navigate('HomeList')} color='#7045AF'/>
        </View>
        <View style={styles.button}>
          <Button title="Sair" onPress={() => BackHandler.exitApp() } color='#7045AF'/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  image:{
    height:153,
    width:114
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
    paddingHorizontal: 10,
    paddingVertical: 15,
  }
});