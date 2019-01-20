import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

class FirmaHomeTouchable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    const { menuName, navTo, myNavigate } = this.props;
    console.log(navTo);
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress = {  () => {myNavigate(navTo) }}>
            <Text style={styles.text}>{ menuName }</Text>
        </TouchableOpacity>
    );
  }
}

export default FirmaHomeTouchable;

const styles = StyleSheet.create({
  container: {
    width:'33%',
    height:148,
    backgroundColor:'#626872',
    justifyContent:'center',
    alignItems:'center'
    //borderWidth:1
  },

  text:{
      fontSize:25,
      color:'#d3dbe8'
  }
});