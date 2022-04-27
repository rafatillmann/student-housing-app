import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
 
export default class ContactListScreen extends React.Component {
  static navigationOptions = {
    title: 'Contatos',
  };
 
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            isLoading: false,
            contacts: json,
          }, function(){
          });
        })
        .catch((error) =>{
          console.error(error);
        });
    });
  }
 
  componentWillUnmount() {
    this.focusListener.remove();
  } 
 
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
 
    const {navigate} = this.props.navigation;
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.contacts}
          renderItem={({item}) =>
          <TouchableOpacity onPress={ () => navigate('ContactDetails', {contact: item})}>
            <View>
              <Text style={styles.contact}>{item.name}</Text>
            </View>
          </TouchableOpacity>}
        />
        <Button title="Voltar" onPress={() => navigate('Home')} />
        </ScrollView>
    );
  }
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