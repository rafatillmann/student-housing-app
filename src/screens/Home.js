import * as React from 'react';
import reactDom from 'react-dom';
import { View, Text, Image, Button, BackHandler, StyleSheet, ScrollView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import * as Font from 'expo-font';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    fontsLoaded: false,
  };
  
  async loadFonts() {
    await Font.loadAsync({
      Nunito: require('../../assets/fonts/Nunito-Regular.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  render() {
    const {navigate} = this.props.navigation;
    if  (this.state.fontsLoaded) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.title}>
            <Image style={styles.image} source={require('../../assets/house_in.png')}/>
          </View>
          <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={() => navigate('HomeList')}>
              <Image style={styles.icon1} source={require('../../assets/home_icon.png')}/>
              <Text style={styles.text}>Ver Moradias</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigate('Favorites')}>
              <Image style={styles.icon1} source={require('../../assets/home_icon.png')}/>
              <Text style={styles.text}>Ver Favoritos</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => BackHandler.exitApp()}>
              <Image style={styles.icon2} source={require('../../assets/exit_icon.png')}/>
              <Text style={styles.text}>Sair</Text>
            </Pressable>
          </View>
        </ScrollView>
      );
    } else {
      return null
    }
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
    padding: 15,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Nunito',
  },
  button: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    backgroundColor: '#7045AF',
    marginBottom: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    marginHorizontal: 60
  },
  icon1: {
    width: 22,
    height: 22
  },
  icon2: {
    width: 22,
    height: 22
  }
});