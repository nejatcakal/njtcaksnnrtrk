import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Picker,
    FlatList
    
  } from 'react-native';

import {ReportMenu} from './reportMenu';
import ModalDropdown from 'react-native-modal-dropdown';

//import connect
import { connect } from 'react-redux';


class AgencyReport extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            selectedAgency: '',
            agencyDisp: 'none',
            activeAgency:'Bir Acenta Seçin',
            agency:{
                agencyName:'',
                agencyCode:'',
                agencySituation:'',
                agencyTours:[] 
            },
        }
    }

    _renderAgency = ( {item} ) => (
      <TouchableOpacity
        style = {{
            padding: 5,
            borderBottomColor:'#000',
            borderBottomWidth:0.7,
            justifyContent:'center',
            alignItems:'center',
            
        }}
        onPress = { (  ) => { this._selectedAgency( item ) } }
        >
          <Text
            style = {{
                fontSize:20,
                textAlign:'center',
                padding:3
            }}>
              { item.agencyName }
          </Text>
      </TouchableOpacity>
    )

    _selectAgency = () => {
        aDisp = this.state.agencyDisp;
        if( aDisp == 'none' ){
            aDisp = 'flex'
        }else{
            aDisp = 'none'
        }
        this.setState({
            ...this.state,
            agencyDisp: aDisp
        });
    }

    _selectedAgency = ( item ) => {
        this.setState( {
            ...this.state,
            activeAgency:item.agencyName,
            agency:item,
            agencyDisp:'none'
        } );
    }

    _extractKey = ( item ) => item.agencyCode
    _keyOfTourSold = ( item ) => item.tourCode


    _renderToursAgencySold = ( { item } ) => {
        let theTour = this.props.myTours.filter( ( tour ) => tour.tourCode === item.tourCode  );
        console.log('SİNAN!!!');
        console.log( item );

        let tourSold = item.tourSold;//array of each tour obj for different prices
        let totalNumSold = 0;
        let totalVenue = 0;

        for( var i = 0; i < tourSold.length; i++ ){
            totalNumSold = totalNumSold + parseInt( tourSold[i].numOfTicket );
            totalVenue = totalVenue + parseInt( tourSold[i].numOfTicket ) * parseInt( tourSold[i].price );
        }
        return (
            <View>
                <Text
                    style = {{
                        width:'100%',
                        padding:9,
                        fontSize:21,
                        textAlign:'center'
                    }}>
                    { theTour[0].tourName }
                </Text>
                <View 
                    style = {{
                        flexDirection:'row',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        width:'100%'
                    }}>

                    <View 
                        style = {{
                            width:'50%',
                            height:1,
                            backgroundColor:'#000'
                        }}/>

                </View>

                <View
                    style = {{
                        justifyContent:'center',
                        alignItems:'center',
                        padding:6
                    }}>
                    <Text>Satış: {totalNumSold} </Text>
                    <Text>Kazanç: {totalVenue}</Text>

                </View>
            </View>
        );
    }

    render(){
        console.log('CURRENT AGENCY');
        console.log( this.state.agency );
        
        console.log('CURRENT STATE');
        //console.log( this.props );
        let agenciesNames = [];
        for( var i=0; i<this.props.myAgencies.length; i++ ){
            agenciesNames.push( this.props.myAgencies[i].agencyName );
        }

        //Toplam Satış,
        let agencyTours = this.state.agency.agencyTours;
        let numOfSold = 0;//toplam satış
        let totalVenue = 0;//toplam kazanç
        for( var i = 0; i < agencyTours.length; i++ ){
            //let eachTourSold = 0;
            let tour = agencyTours[i];
            let totalTicket = 0;
            let localVenue = 0;
            for( var j = 0; j < tour.tourSold.length; j++ ){
                totalTicket = totalTicket + parseInt(tour.tourSold[j].numOfTicket);
                localVenue = localVenue + ( tour.tourSold[j].numOfTicket * tour.tourSold[j].price );
            }
            numOfSold = numOfSold + totalTicket;
            totalVenue = totalVenue + localVenue;
        }
        return(
          
            <View style={styles.container}>
            
                <ReportMenu 
                    screenFunc = {this.props.screenFunc}
                />
                <View
                    style = {{
                        justifyContent:'flex-start',
                        alignItems:'center',
                        padding:2,
                        width:'100%'
                    }}>

                    <Text
                        style={{
                            width:'100%',
                            textAlign:'center',
                            padding:3,
                            fontSize:20,
                            marginTop:10
                        }}> ACENTA RAPORLARI </Text>
                    <View 
                        style = {{
                            flexDirection:'row',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            width:'100%'
                        }}>

                        <View 
                            style = {{
                                width:'50%',
                                height:1,
                                backgroundColor:'#000'
                            }}/>

                    </View>
                    <TouchableOpacity
                        style = {{
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                            padding:5,
                            marginTop:11,
                            backgroundColor:'#c6c6be'
                        }}
                        onPress = {this._selectAgency}
                        >
                        <Text
                            style = {{
                                fontSize:20,
                                padding:5,
                                borderBottomWidth:0.5,
                                borderBottomColor:'#fff'

                            }}>{ this.state.activeAgency }</Text>
                    </TouchableOpacity>
                    <View 
                        style = {{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            width:'100%'
                        }}>

                        <View 
                            style = {{
                                width:'45%',
                                height:1,
                                backgroundColor:'#000'
                            }}/>
                        <View 
                            style = {{
                                width:'45%',
                                height:1,
                                backgroundColor:'#000'
                            }}/>

                    </View>
                    <FlatList
                        data = { this.props.myAgencies }
                        renderItem = { this._renderAgency }
                        keyExtractor = { this._extractKey }
                        style = {{
                            display:this.state.agencyDisp
                        }}
                    />

                </View>

                <View
                    style = {{

                    }}>

                    <View
                        style = {{
                            flexDirection:'row',
                            width:'100%',
                            justifyContent:"space-around",
                            padding:6
                        }}>
                        <Text
                            style = {{
                                padding:5,
                                textAlign:'center',
                                fontSize:20
                            }}> Durum:</Text>
                        <Text
                            style = {{
                                padding:5,
                                textAlign:'center',
                                fontSize:20
                            }}> { this.state.agency.agencySituation } </Text>
                    </View>

                    <View
                        style = {{
                            justifyContent:'center',
                            alignItems:'center',
                            padding:4
                        }}>

                        <View
                            style = {{
                                flexDirection:'row',
                                padding:4,
                                justifyContent:'space-around',
                                alignItems:'center'
                            }}>
                            <Text
                                style = {{
                                    padding:5,
                                    textAlign:'center',
                                    fontSize:20
                                }}> Toplam Satış:</Text>
                            <Text
                                style = {{
                                    padding:5,
                                    textAlign:'center',
                                    fontSize:20
                                }}> { numOfSold } </Text>
                        </View>

                        <View
                            style = {{
                                flexDirection:'row',
                                padding:4,
                                justifyContent:'space-around',
                                alignItems:'center'
                            }}>
                            <Text
                                style = {{
                                    padding:5,
                                    textAlign:'center',
                                    fontSize:20
                                }}> Toplam Kazanç:</Text>
                            <Text
                                style = {{
                                    padding:5,
                                    textAlign:'center',
                                    fontSize:20
                                }}> { totalVenue } TL </Text>
                        </View>

                    </View>

                    <View>
                        <FlatList 
                            data = { this.state.agency.agencyTours }
                            renderItem = { this._renderToursAgencySold }
                            keyExtractor = { this._keyOfTourSold }
                        />
                    </View>

                </View>
            
            </View>
         
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
      myAgencies:state.agencyReducer.agencies,
      myTours:state.tourReducer.theTours
    }
  }
  
  /*const mapDispatchToProps = ( dispatch ) => {
    return {
      addThePrice: ( name ) => {
        dispatch( addPrice( name ) )
      },
  
      deleteThetour: () => {
        dispatch( deleteTour() )
      }
    }
  }*/
  
  
  
export default connect( mapStateToProps,null )(AgencyReport);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:175
    },
  });