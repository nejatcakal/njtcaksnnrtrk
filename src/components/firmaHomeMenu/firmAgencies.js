import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';

class AgenciesScreen extends React.Component {
  static navigationOptions = {
    title: 'Acentalarım',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Agencies Screen" />
      </View>
    );
  }
}

export default AgenciesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});