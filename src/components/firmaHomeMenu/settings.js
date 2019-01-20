import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Ayarlar',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Settings Screen" />
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});