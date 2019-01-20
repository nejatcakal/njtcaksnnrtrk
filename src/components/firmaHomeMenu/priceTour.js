import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

//import connect
import { connect } from 'react-redux';

//import action creators
import { addTour, deleteTour, addPrice } from '../../actions/actions';

class TourPricingScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      price:'',
      id:''
    }
  }

  static navigationOptions = {
    title: 'Tur Fiyatlandır',
  };

  _eachPriceKeyExtractor = ( item ) => item.startDate;

  _renderEachPrice = ( {item} ) => (

    <View style = {styles.viewParts}>
      <Text style = {[styles.text, {width:'65%', borderRightWidth:0.5, borderRightColor:'#fff'}]} >{item.startDate}-{item.endDate} </Text>
      <Text style = {[styles.text,{width:'35%', textAlign:'right'}]}  > {item.price} </Text>
    </View>
  )

   mySeperator = () => {
    return (
      <View
        style = {{
          width: '98%',
          height: 15,
          backgroundColor: '#000',
          marginLeft:'1%'
        }}
      >

      </View>
    );
  }

  _keyExtractor = (item, index) => item.tourCode;

  _renderItem = ({item}) => (
    <TouchableOpacity
    style = {styles.eachItem}
    onPress = {() => { this.props.navigation.navigate('TurFiyatEkle', {tour:item})}}
    >
      <Text style = {[styles.text, styles.head]} > {item.tourName} Turu</Text>
      <View style={{
        width:'100%', 
        height:1, 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#fff',
        marginBottom:18
                    }}>
        <View style={{width:'25%', height:1, backgroundColor:'#4f5c70'}}/>
        <View style={{width:'75%', height:0.5, backgroundColor:'#fff'}}/>
      </View>
      
      <View style = {styles.viewParts}>
        <Text style = {[styles.text, styles.partNames]} > Kalkış Saati </Text>
        <Text style = {[styles.text, styles.valueParts]}  > {item.tourStartAt} </Text>
      </View>

      <View style = {styles.viewParts}>
        <Text style = {[styles.text, styles.partNames]} > Varış Saati </Text>
        <Text style = {[styles.text, styles.valueParts]}  > {item.tourFinishesAt} </Text>
      </View>
      
      <View style = {styles.viewParts}>
        <Text style = {[styles.text, styles.partNames]} >Rotamız </Text>
        <Text style = {[styles.text, styles.valueParts]}  > {item.tourRoute} </Text>
      </View>

      <View style = {styles.viewParts}>
        <Text style = {[styles.text, styles.partNames]} >Max Yolcu </Text>
        <Text style = {[styles.text, styles.valueParts]}  > {item.tourMaxPeople} </Text>
      </View>

      <View style = {styles.viewParts}>
        <Text style = {[styles.text, styles.partNames]} >Fiyatlar</Text>
        <View style = {[styles.text, styles.valueParts]} >
          <View style = {styles.viewParts}>
            <Text style = {[styles.text, {width:'65%', borderRightWidth:0.5, borderRightColor:'#fff'}]} >Tarih Aralığı </Text>
            <Text style = {[styles.text,{width:'35%', textAlign:'center'}]}  > Fiyat </Text>
          </View>
        
          <FlatList 
            data = {item.tourPrice}
            renderItem = {this._renderEachPrice}
            keyExtractor = {this._eachPriceKeyExtractor}
          />
        </View>
      </View>

      
     
    </TouchableOpacity>
  );

  render() {
    console.log(this.props)
    return (
        <FlatList
          data={this.props.tourTheTours}
          keyExtractor = {this._keyExtractor}
          renderItem = {this._renderItem }
          ItemSeparatorComponent = {this.mySeperator}
        />
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    tourTheTours:state.tourReducer.theTours,
    tourState: state.tourReducer,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addThePrice: ( name ) => {
      dispatch( addPrice( name ) )
    },

    deleteThetour: () => {
      dispatch( deleteTour() )
    }
  }
}



export default connect( mapStateToProps, mapDispatchToProps )(TourPricingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  eachItem:{
    width:'98%',
    backgroundColor:'#4f5c70',
    padding:8,
    marginLeft:'1%'
  },
  text:{
    fontSize: 18,
    marginBottom:6,
    color:'#fff'
  },
  head:{
    fontSize:25,
    fontWeight: 'bold',
    paddingBottom:6
  },

  viewParts:{
    flexDirection:'row',
    padding:5,
    paddingBottom:0,
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:0.5,
    borderBottomColor:'#fff'
  },

  partNames:{
    width:'30%', 
     
    marginBottom:0
  },

  valueParts:{ 
    width:'70%', 
    textAlign:'right',
    marginBottom:0,
    borderLeftWidth:0.5, 
    borderLeftColor:'#fff',
   }
});