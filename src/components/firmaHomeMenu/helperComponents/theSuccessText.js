import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
  } from 'react-native';

export class TheSuccessTextFull extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            tourName: props.tourName
        }
    }

    render(){
        return (
            <View  style = { styles.priceView }>

                <Text style = { styles.priceText }>{this.props.tourName} Turunuz kaydedildi </Text>
        
                <TouchableOpacity
                    style = { styles.priceIt  }
                    onPress = { this.props.navTo }
                >
                    <Text style = { [styles.priceSelf] }>FİYATLANDIRIN</Text>
                </TouchableOpacity>
        
            </View>
        );
    }
}

export const TheSuccessTextEmpty = () => (
    <Text>''</Text>
);


const styles = StyleSheet.create({
    priceView:{
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: "#4f5c70",
        width:'100%',
        paddingTop:7,
        paddingBottom:7,
        borderBottomWidth:0.5
      },
      priceText:{
        flex:1,
        flexDirection:'row',
        color:'#fff',
        fontSize:17,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        marginBottom:5,
        marginLeft:7
    
      },
      priceIt:{
        width:'90%',
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
      },
      priceSelf:{
        fontSize:20,
        color:'#fff',
        borderRadius:5,
        backgroundColor: "rgba(92, 99,216, 1)",
        borderColor: "transparent",
        borderWidth: 0,
        padding:9,
      },
});