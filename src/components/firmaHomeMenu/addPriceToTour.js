import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker
} from 'react-native';

//import connect
import { connect } from 'react-redux';

//import action creators
import {  addPrice } from '../../actions/actions';
import { FlatList } from 'react-native-gesture-handler';
//import Date Picker
import DateTimePicker from 'react-native-modal-datetime-picker';

class AddPriceToTourScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          isFinishTimePickerVisible:false,
          
          startDateToMin:{
            day:'',
            month:''
          },
          endDateToMax:{
            day:'',
            month:''
          },
          tourName:'',
          tourStartAt:'',
          tourMaxPeople:'',
          tourCode:this.props.navigation.state.params.tour.tourCode,
          tourPrice:{
            startDate:'Başlangıç Tarihi',
            endDate:'Bitiş Tarihi',
            priceUnit:'',
            price:''
          },
          tourAddSuccess:true
        }
    }

  static navigationOptions = {
    title: 'Fiyat Ekle',
  };

    //dateTime Methods
    _showStartTimePicker = () => this.setState({...this.state,  isStartTimePickerVisible: true });
    _hideStartTimePicker = () => this.setState({ ...this.state, isStartTimePickerVisible: false });
  
    _showFinishTimePicker = () => this.setState({ ...this.state, isFinishTimePickerVisible: true });
    _hideFinishTimePicker = () => this.setState( {...this.state, isFinishTimePickerVisible:false} );
  
    _handleStartTimePicked = (time) => {
      console.log('A date has been picked: ', time);
      var monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran','Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
      var month = monthNames[time.getMonth()];
      const day = time.getDate();
      var startAt = day + '-' + month;
      this._setStartDateOfPrice( startAt );
      this.setState({
        ...this.state,
        startDateToMin:{
          day:day,
          month:time.getMonth()
        }
      });
      this._hideStartTimePicker();
    };
  
    _handleFinishTimePicked = (date) => {
      console.log('A date has been picked: ', date);
      var monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran','Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
      var month = monthNames[date.getMonth()];
      var day = date.getDate();
      var endAt = day + ' ' + month;
      this._setEndDateOfPrice( endAt );
      this.setState({
        ...this.state,
        endDateToMax:{
          day:day,
          month:date.getMonth()
        }
      });
      this._hideFinishTimePicker();
    };


    _setStartDateOfPrice = (value) => {
      this.setState({
          ...this.state,
          tourPrice:{
            ...this.state.tourPrice,
            startDate:value
          }
        })
      }

      _setPriceUnit = (value) => {
        this.setState({
            ...this.state,
            tourPrice:{
              ...this.state.tourPrice,
              priceUnit:value
            }
          })
        }

      _setEndDateOfPrice = (value) => {
        this.setState({
            ...this.state,
            tourPrice:{
              ...this.state.tourPrice,
              endDate:value
            }
          })
        }

  _deletePrice = ( startDate ) => {
    let myTour = this.props.tours.filter( ( tour ) =>   tour.tourCode === this.state.tourCode  );
    //myTour[0] = {...myTour[0], tourPrice:[...myTour[0].tourPrice, this.state.tourPrice]};
    let myTourPrices = myTour[0].tourPrice.filter( ( Price ) => Price.startDate !== startDate );

    myTour[0] = { ...myTour[0], tourPrice:myTourPrices }

    let otherTours = this.props.tours.filter( ( tour ) =>  tour.tourCode != this.state.tourCode  );
    let theTours = [...myTour, ...otherTours];

    this.props.addThePrice( theTours );
    this.props.navigation.navigate('TurFiyatlandır');
  }

  mySeperator = () => {
    return (
      <View
        style = {{
          width: '100%',
          height: 1,
          backgroundColor: '#fff'
        }}
      >

      </View>
    );
  }

  renderEachPrice = ( {item} ) =>(
    <View style = {{
      borderWidth:0.5,
      borderColor:'#000',
      borderBottomWidth:0,
      padding:5,
      backgroundColor:'#353638'
    }}>
        <View
          style = {{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width:'100%',
            paddingTop: 15,
            paddingBottom:15
          }}>
          <Text
            style = {{
              color:'#fff',
              fontSize:20,
              width:'75%'
            }}
          >{item.startDate} - { item.endDate } aralığı için </Text>
          <Text
            style = {{
              color:'#fff',
              fontSize:30,
              width:'25%',
              height: 100,
              backgroundColor:'#000',
              borderWidth:0.5,
              borderRadius:50,
              borderColor:'#000',
              textAlign:'center',
              paddingTop:25

            }}
          >{ item.price } {item.priceUnit} </Text>
        </View>
        <View style = {styles.btns}>
          
          <TouchableOpacity style = {[styles.touchableBtn, { flexDirection:'row', justifyContent:'flex-end', width:'100%'}]}
            onPress = {() => {this._deletePrice( item.startDate )}}
          >
            <Text style = {styles.btnText} >Sil</Text>
          </TouchableOpacity>
        </View>
    </View>
  )


  _keyextractor = (item, index) => item.startDate;

  _priceTheTour = ( tourCode ) => {
    let myTour = this.props.tours.filter( ( tour ) =>   tour.tourCode === tourCode  );
        myTour[0] = {...myTour[0], tourPrice:[...myTour[0].tourPrice, this.state.tourPrice]};

    let otherTours = this.props.tours.filter( ( tour ) =>  tour.tourCode != tourCode  );
    let theTours = [...myTour, ...otherTours];

    this.props.addThePrice( theTours );
    this.props.navigation.navigate('TurFiyatlandır');
  }

  render() {
    console.log( this.props );
    let myTourArr = this.props.tours.filter( ( tour ) => tour.tourCode === this.state.tourCode );
    let myTour = myTourArr[0];
    let tourPricesComponent;
    console.log('my tour');
    console.log(myTour.tourPrice);
    console.log(this.state.tourPrice);
    if(myTour.tourPrice.length == 0){
      tourPricesComponent =  <Text>Henüz fiyat eklenmemiştir</Text>;
    }else{
      tourPricesComponent = <FlatList
                              data = {myTour.tourPrice}
                              renderItem = {this.renderEachPrice}
                              keyExtractor = {this._keyextractor}
                              ItemSeparatorComponent = {this.mySeperator}
                            />
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style = { styles.head }>{myTour.tourName} Turu</Text>
          <View 
            style = {{
              height:8,
              width:'100%',
              backgroundColor:'#fff'
            }}
          />

          { tourPricesComponent }
          
          
          <View
            style = {{
              width:'100%',
              borderTopWidth:8,
              borderTopColor:'#fff'
            }}
            >
            <Text
              style = {{
                width:'100%',
                color:'#000',
                fontSize:20,
                textAlign: 'center',
                padding:13,
                borderBottomWidth:0.5,
                borderColor:'#000'
              }}
            >Yeni Fiyat Ekle</Text>
            <View style = {{
              flexDirection:'row',
              justifyContent:'space-around',
              alignItems:'center',
              padding:7,
              marginBottom:5
            }}>
              <View>
                <TouchableOpacity 
                  style = {{
                    backgroundColor:'#fff',
                    padding:16,
                    
                  }}  
                  onPress={this._showStartTimePicker}>
                  <Text 
                    style = {{
                      fontSize:23,
                      color:'#4f5c70',
                      textAlign:"center"
                    }}
                  >{this.state.tourPrice.startDate}</Text>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isStartTimePickerVisible}
                  onConfirm={this._handleStartTimePicked}
                  onCancel={this._hideStartTimePicker}
                  mode = 'date'
                  maximumDate = { new Date('2020', this.state.endDateToMax.month, this.state.endDateToMax.day) }
                  minimumDate = { new Date() }
                />
              </View>
            
              <View>
                <TouchableOpacity 
                   style = {{
                    backgroundColor:'#fff',
                    padding:16,
                    
                  }} 
                  onPress={this._showFinishTimePicker}>
                  <Text
                    style = {{
                      fontSize:23,
                      color:'#4f5c70',
                      textAlign:"center"
                    }}
                  >{this.state.tourPrice.endDate}</Text>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isFinishTimePickerVisible}
                  onConfirm={this._handleFinishTimePicked}
                  onCancel={this._hideFinishTimePicker}
                  mode = 'date'
                  minimumDate = { new Date('2019', this.state.startDateToMin.month, this.state.startDateToMin.day) }
                />
              </View>
            </View>

            <View style = {{
              flexDirection:'row',
              justifyContent:'space-around',
              alignItems:'center',
              padding:7,
              marginBottom:5
            }}>
              <TextInput
                  onChangeText = { (value) => {this.setState({ tourPrice:{...this.state.tourPrice, price:value}})} }
                  placeholder = 'Fiyat '
                  placeholderTextColor = '#fff'
                  style = {{
                    borderBottomColor:'#fff',
                    borderBottomWidth:0.5,
                    color:'#fff',
                    fontSize:21,
                    width:'43%'

                  }}
              />

              <Picker
                selectedValue={this.state.tourPrice.priceUnit}
                style={{ height: 50, width: 100 , }}
                itemStyle = {{fontSize:22, color :'#fff'}}
                onValueChange={(itemValue, itemIndex) => {this._setPriceUnit( itemValue )}}>
                <Picker.Item label="Euro" value="Euro" />
                <Picker.Item label="TL" value="TL" />
                <Picker.Item label="Dolar" value="Dolar" />
                <Picker.Item label="Sterlin" value="Sterlin" />
              </Picker>
            </View>
            <TouchableOpacity
                style = { styles.myButton }
                onPress = {() => {this._priceTheTour(this.state.tourCode)}}
            >
                <Text style = { styles.myButtonText } >Kaydet</Text>
                
            </TouchableOpacity>

            </View> 
          </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ( state ) => {
    return {
      //tourPrice:state.priceReducer.price,
      //tourCode:state.priceReducer.id,
      tours: state.tourReducer.theTours
    }
  }
  
  const mapDispatchToProps = ( dispatch ) => {
    return {
      addThePrice: ( tour) => {
        dispatch( addPrice( tour ) )
      },
  
      deleteThetour: () => {
        dispatch( deleteTour() )
      }
    }
  }
  
  
  
  export default connect( mapStateToProps, mapDispatchToProps )(AddPriceToTourScreen);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'#4f5c70',
    marginTop: 20
  },

  head:{
    fontSize:30,
    color:'#fff',
    //borderBottomWidth:3,
    paddingBottom:4,
    borderBottomColor:'#fff',
  },
  input:{
    width:'90%',
    borderWidth:0.5,
    borderTopWidth:0,
    borderColor:'#fff',
    fontSize:19,
    color:'#fff'
    
  },

  myButton:{
    width:'100%',
    padding:9,
    justifyContent:'flex-end',
    alignItems:'center'
  },

  myButtonText: {
    color: '#fff',
    fontSize:25
  },

  eachPriceView:{
    width:'100%',
    backgroundColor:'blue'
  },

  priceText:{
    fontSize: 17,
    color:'#fff'
  },

  btns:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:5,
    padding:8
  },

  touchableBtn:{

  },
  btnText:{
    width:'47%',
    borderWidth:0.5,
    padding: 6,
    justifyContent:'space-between',
    textAlign:'center',
    backgroundColor:'#fff',
    fontSize:25,
    color:'#4f5c70'
  },
  dANDp:{
    padding:11,

  }
});