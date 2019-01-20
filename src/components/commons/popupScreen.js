import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from 'react-native';

//import PopScreen from './firmaHomeMenu/firmaHomeTouchables';

class PopScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  static navigationOptions = {
    title: 'Tur Onaylama',
    headerStyle: {
        backgroundColor: 'steelblue',
        marginBottom:3
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:20,
        textAlign: 'center'
    },
};

  render() {
    return (
      <View style={styles.container}>
        <Button
        title='Geri Git'
        
        />
      </View>
    );
  }
}

export default PopScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  firmaInfo: {
    width:'100%',
    height:100,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:1,
    paddingRight:2,
    paddingLeft:12,
    backgroundColor:'#4f5c70'
  },

  text: {
    color: '#fff',
    fontSize:25
  },

  exitButton: {
    padding:5,
    fontSize:35
  },

  threePart:{
   flexDirection:'row',
   width:'100%',
   justifyContent:'space-around',
   marginTop:1
  },

  firmaTouchableView:{
  },

  /*threePart: {
    flexDirection:'row',
   // width:'100%',
    justifyContent:'space-between',
    alignItems:'center'
  },*/
});