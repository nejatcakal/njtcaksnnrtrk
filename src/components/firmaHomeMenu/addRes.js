import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';

class AddResResScreen extends React.Component {
  static navigationOptions = {
    title: 'Rezervayon Ekle',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Adding Reservations Screen" />
      </View>
    );
  }
}

export default AddResResScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});