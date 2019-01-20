import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

//import connect
import { connect } from 'react-redux';

//import action creators
import { addTour, deleteTour } from '../../actions/actions';

//import Date Picker
import DateTimePicker from 'react-native-modal-datetime-picker';

import { TheSuccessTextFull, TheSuccessTextEmpty } from './helperComponents/theSuccessText';


class TourCreationScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      isStartTimePickerVisible: false,
      isFinishTimePickesVisible:false,
      tour:{
        tourName:'',
        tourStartAt:'Kalkış saatini giriniz',
        tourFinishesAt:'Geri dönüş saatini giriniz',
        tourMaxPeople:'',
        tourCode:'',
        tourPrice:'',
        tourRoute: '',
        tourVideoLink:'',
        tourExtraInfo:'',
        tourAddSuccess:true
      }
    }
  }

  //dateTime Methods
  _showStartTimePicker = () => this.setState({ isStartTimePickerVisible: true });
  _hideStartTimePicker = () => this.setState({ isStartTimePickerVisible: false });

  _showFinishTimePicker = () => this.setState({ isFinishTimePickerVisible: true });
  _hideFinishTimePicker = () => this.setState( {isFinishTimePickesVisible:false} );

  _handleStartTimePicked = (time) => {
    console.log('A date has been picked: ', time);
    var startAt = time.getHours() + ':' + time.getMinutes();
    this.setStartAt( startAt);
    this._hideStartTimePicker();
  };

  _handleFinishTimePicked = (time) => {
    console.log('A date has been picked: ', time);
    var finishesAt = time.getHours() + ':' + time.getMinutes();
    this.setFinishesAt( finishesAt);
    this._hideFinishTimePicker();
  };



  setTourName = ( value ) => {
    var tourCode = value + '-' + this.getTourCode();
    this.setState({
      ...this.state,
      tour:{
        ...this.state.tour,
        tourName:value,
        tourCode:tourCode
      }
    });
    
  } 

  setExtraInfo = ( value ) => {
    this.setState({
      ...this.state,
      tour:{
        ...this.state.tour,
        tourExtraInfo:value,
      }
    });
    
  } 


  
  setMaxPeople= ( value ) => {
    this.setState({
      ...this.state,
      tour:{
        ...this.state.tour,
        tourMaxPeople:value
      }
      
    });
  }
  
  setStartAt= ( value ) => {
    this.setState({
      ...this.state,
      tour:{
        ...this.state.tour,
        tourStartAt:value
      }
      
    });

  }

  setFinishesAt= ( value ) => {
    this.setState({
      ...this.state,
      tour:{
        ...this.state.tour,
        tourFinishesAt:value
      }
      
    });
  }

  setTourRoute = ( value ) =>{
    this.setState({
      ...this.state,
      tour:{
        ...this.state.tour,
        tourRoute: value
      }
    });
  }

  setVideoLink = ( value ) =>{
    this.setState({
      ...this.state,
      tour:{
        ...this.state.tour,
        tourVideoLink: value
      }
    });
  }

  getTourCode = () =>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    var tourCode = date+''+time;

    return tourCode;
  }
  static navigationOptions = {
    title: 'Tur Oluştur',
    headerStyle: {
      backgroundColor: '#4f5c70'
     },
     headerTintColor: '#fff',
  };

  saveTour = () =>{
    let myTour = this.state.tour;
    if(myTour.tourName == '' || myTour.tourStartAt == '' ||myTour.tourMaxPeople == '' || myTour.tourCode == '' ){
      alert( 'Lütfen Tur Bilgilerini Eksiksiz Giriniz!' );
    }else{
      this.props.addTheTour(myTour);
      this.setState({
        tour:{
          tourName:myTour.tourName,
          tourStartAt:'Kalkış saatini giriniz',
          tourMaxPeople:'',
          tourCode:'',
          tourPrice:'',
          tourFinishesAt:'Geri dönüş saatini giriniz',
          tourRoute:'',
          tourVideoLink:'',
          tourExtraInfo:'',
          tourAddSuccess:true
        }
      });
    }
  }

  _goToNav = () =>{
    this.props.navigation.navigate('TurFiyatlandır')
  }

  render() {
    let TheSuccessText;
    if(this.props.tourAddSuccess){
      TheSuccessText = <TheSuccessTextFull 
        tourName= {this.state.tour.tourName}
        navTo = {this._goToNav}/>
    }else{
      TheSuccessText = <TheSuccessTextEmpty />;
    }
    return (
      <ScrollView style={styles.containerScroll}>
        
        <View style={styles.container}>
          {TheSuccessText} 
          <TextInput
            placeholder='Tur adını giriniz'
            placeholderTextColor="#fff"
            onChangeText = {this.setTourName}
            style = {styles.theInput}
          >
          </TextInput>
          
          <View style={{ flex: 1,  width:'100%'}}>
            <TouchableOpacity onPress={this._showStartTimePicker}  style = {styles.touchable}>
              <Text  style = {styles.theInputTime} >{this.state.tour.tourStartAt}</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isStartTimePickerVisible}
              onConfirm={this._handleStartTimePicked}
              onCancel={this._hideStartTimePicker}
              mode = 'time'
            />
          </View>

          <View style={{ flex: 1 , width:'100%'}}>
            <TouchableOpacity onPress={this._showFinishTimePicker}  style = {styles.touchable} >
              <Text  style = {styles.theInputTime} >{this.state.tour.tourFinishesAt}</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isFinishTimePickerVisible}
              onConfirm={this._handleFinishTimePicked}
              onCancel={this._hideFinishTimePicker}
              mode = 'time'
            />
          </View>

          <TextInput
            placeholder='Rotayı giriniz'
            placeholderTextColor="#fff"
            onChangeText = {this.setTourRoute}
            style = {styles.theInput}
           
          >
          </TextInput>
          

          <TextInput
            placeholder='Maksimum kişi sayısını giriniz'
            placeholderTextColor="#fff"
            onChangeText = {this.setMaxPeople}
            style = {styles.theInput}
            value = {this.state.tour.tourMaxPeople}
          >
          </TextInput>

          <TextInput
            placeholder='Ekstra Bilgi'
            placeholderTextColor="#fff"
            onChangeText = {this.setExtraInfo}
            style = {styles.theInput}
            value = {this.state.tour.tourExtraInfo}
          >
          </TextInput>

          <TextInput
            placeholder='Youtube video linkini giriniz'
            placeholderTextColor="#fff"
            onChangeText = {this.setVideoLink}
            style = {styles.theInput}
            value = {this.state.tour.tourVideoLink}
          >
          </TextInput>
          

          <TouchableOpacity
            onPress= {this.saveTour}
            style = { styles.theButton }
          >
            <Text style = {styles.kaydet}>Kaydet</Text>
          </TouchableOpacity>

          

        </View>
        </ScrollView>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    tourName:state.tourReducer.tour.tourName,
    tourStartAt:state.tourReducer.tour.tourStartAt,
    tourMaxPeople:state.tourReducer.tour.tourMaxPeople,
    tourCode:state.tourReducer.tour.tourCode,
    tourAddSuccess:state.tourReducer.tour.tourAddSuccess,
    tourTheTours:state.tourReducer.theTours
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addTheTour: ( name ) => {
      dispatch( addTour( name ) )
    },

    deleteThetour: () => {
      dispatch( deleteTour() )
    }
  }
}



export default connect( mapStateToProps, mapDispatchToProps )(TourCreationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#4f5c70'
  },

  theInput: {
    borderBottomWidth:0.7,
    width:'95%',
    margin:15,
    fontSize:20,
    borderColor: "#fff",
  },
  theInputTime:{
    width:'95%',
    fontSize:20,
    color:'#fff',
    marginBottom:15
  },

  touchable:{
    borderBottomWidth:0.7,
    width:'95%',
    margin:15,
    fontSize:20,
    borderColor: "#fff",
  },
  theButton:{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: '95%',
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  },
  kaydet:{
    color:'#fff',
    fontSize:25
  },

  containerScroll:{
    backgroundColor:'#4f5c70'
  }
});