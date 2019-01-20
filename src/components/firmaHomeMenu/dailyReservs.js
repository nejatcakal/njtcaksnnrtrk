import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';

class DailyResScreen extends React.Component {
  static navigationOptions = {
    title: 'Günlük Rezervasyonlar',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Daily Reservations Screen" />
      </View>
    );
  }
}

export default DailyResScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});