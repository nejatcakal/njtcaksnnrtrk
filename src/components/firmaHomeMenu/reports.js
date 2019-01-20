import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';

import  TourReport  from './helperComponents/tourReport';
import  AgencyReport  from './helperComponents/agencyReport';

class ReportsScreen extends React.Component {
  
  constructor( props ){
    super( props );
    this.state = {
      display:{
        tourRepors:true,
        agencyReports:false
      }
    }
  }
  
  static navigationOptions = {
    title: 'Raporlar',
  };

  _dispTourReports = () =>{
    this.setState({
      ...this.state,
      display:{
        ...this.state.display,
        tourRepors:true,
        agencyReports:false
      }
    });
  }

  _dispAgencyReports = () =>{
    this.setState({
      ...this.state,
      display:{
        ...this.state.display,
        tourRepors:false,
        agencyReports:true
      }
    });
  }

  render() {
    const theScreenFuncs = {
      showTour:this._dispTourReports,
      showAgency:this._dispAgencyReports
    }
    if( this.state.display.tourRepors ){
      return(
        <ScrollView>
          <TourReport 
            screenFunc = {theScreenFuncs}
          />
        </ScrollView>
      );
    }else{
      return (
        <ScrollView>
          <AgencyReport 
           screenFunc = {theScreenFuncs}
          />
        </ScrollView>
      );
    }
  }
}

export default ReportsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});