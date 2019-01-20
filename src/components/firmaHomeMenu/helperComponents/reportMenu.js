import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export class ReportMenu extends React.Component {
    constructor( props ){
        super( props );
        this.state = {

        }
    }

    render(){
        return(
            <View style = { styles.menuBtnsView }>
                
                <TouchableOpacity 
                    onPress = {this.props.screenFunc.showTour}
                    style = { styles.menuBtnTouchable }>
                
                <Text style = { styles.menuBtnText }>
                    Tur Raporları  
                </Text>
                
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress = {this.props.screenFunc.showAgency}
                    style = { styles.menuBtnTouchable }>
                
                <Text style = { styles.menuBtnText }>
                    Acenta Raporları  
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    menuBtnsView:{
      width:'100%',
      padding:7,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    menuBtnTouchable:{
      backgroundColor:'#c6c6be',
      padding:10,
      justifyContent:'center',
      alignItems:'center',
      width:'49.5%'
    },
  
    menuBtnText:{
      color:'#fff',
      fontSize:21,
      padding:3,
      textAlign:'center'
    }
  });