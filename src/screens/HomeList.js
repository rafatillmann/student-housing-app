import * as React from 'react';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View, SectionList } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class HomeListScreen extends React.Component {
  static navigationOptions = {
    title: 'Moradias',
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            isLoading: false,
            contacts: json,
          }, function () {
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    const { navigate } = this.props.navigation;
    return (
      <>
        <FlatList
          data={this.state.contacts}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => navigate('HomeDetails', { home: item })}>
              <View>
                <Text style={styles.contact}>{item.name}</Text>
              </View>
            </TouchableOpacity>}
        />
        <Button title="Voltar" onPress={() => navigate('Home')} color='black' />
      </>
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