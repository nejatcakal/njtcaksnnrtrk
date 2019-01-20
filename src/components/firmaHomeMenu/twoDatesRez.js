import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';

class TwoDatesResScreen extends React.Component {
  static navigationOptions = {
    title: 'İki Tarih Arası Rezervasyonlar',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Two Dates Reservations Screen" />
      </View>
    );
  }
}

export default TwoDatesResScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});