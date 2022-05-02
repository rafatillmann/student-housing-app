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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    const { navigate } = this.props.navigation;
    const homes = require('../../home.json');
    return (
      <>
        <FlatList
          data={homes}
          renderItem={({ home }) =>
            <TouchableOpacity onPress={() => navigate('HomeDetails', { home: home })}>
              <View>
                <Text style={styles.contact}>{home.nome}</Text>
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