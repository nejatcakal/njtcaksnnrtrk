import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView
  } from 'react-native';

import {ReportMenu} from './reportMenu'
import { FlatList } from 'react-native-gesture-handler';
//import connect
import { connect } from 'react-redux';

//import action creators
import { addTour, deleteTour, addPrice } from '../../../actions/actions';

class TourReport extends React.Component{
    constructor( props ){
        super(props);
        this.state = {
            /*exampleTourFromRedux:        
            {
                tourName:'Van-Bitlis',
                tourStartAt: '11.30',
                tourMaxPeople:'300',
                tourCode:'Van-Bitlis-2019-1-1420-23-11',
                tourPrice:[
                    {
                    startDate:'5 Mayıs',
                    endDate:'5 Haziran',
                    price:'650'}
                ],
                tourVideoLink:'',
                tourFinishesAt: '20.30',
                tourRoute: 'Van-gevaş-tatvan-bitlis',
                tourAddSuccess:true
    
            }*/
        }
    }

    _renderMyTour = ( {item} ) => (
        <TouchableOpacity
            style = {{
                borderLeftWidth:3,
                borderBottomWidth:3,
                borderColor:'#c6c6be',
                marginTop:7,
                marginLeft:15
            }}>

            <Text
                style = {{
                    padding:8,
                    paddingBottom:0,
                    textAlign:'left',
                    fontSize: 20
                }}>
                {item.tourName}
            </Text>

            <View
                style = {{
                    flexDirection:'row',
                    width:'100%',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginTop:8
                }}>
                <View
                    style = {{
                        height:0,
                        width:'25%'
                    }}></View>
                <View
                    style = {{
                        width:'75%',
                        height:2,
                        backgroundColor:'#000'
                    }}></View>
            </View>
            
            <View>
                <View
                    style = {{
                        flexDirection:'row',
                        width:'100%',
                        justifyContent:'space-around',
                        alignItems:'center',
                        padding:6
                    }}>
                    <Text
                        style = {{
                            width:'50%',
                            textAlign:'left',
                            fontSize:19,
                            paddingLeft:9

                        }}> -> Gerçekleşen: </Text>
                    <Text
                        style = {{
                            width:'50%',
                            textAlign:'right',
                            fontSize:22
                        }}> 25</Text>
                </View>

                <View
                    style = {{
                        flexDirection:'row',
                        width:'100%',
                        justifyContent:'space-around',
                        alignItems:'center',
                        padding:6
                    }}>
                    <Text
                        style = {{
                            width:'50%',
                            textAlign:'left',
                            fontSize:19,
                            paddingLeft:9

                        }}> -> Katılım Sayısı: </Text>
                    <Text
                        style = {{
                            width:'50%',
                            textAlign:'right',
                            fontSize:22
                        }}> 253</Text>
                </View>

                <View
                    style = {{
                        flexDirection:'row',
                        width:'100%',
                        justifyContent:'space-around',
                        alignItems:'center',
                        padding:6
                    }}>
                    <Text
                        style = {{
                            width:'50%',
                            textAlign:'left',
                            fontSize:19,
                            paddingLeft:9

                        }}> -> Toplam KAzanç: </Text>
                    <Text
                        style = {{
                            width:'50%',
                            textAlign:'right',
                            fontSize:22
                        }}> 25 000 TL</Text>
                </View>

            </View>
        </TouchableOpacity>
    );

    _extractKey = ( tour ) =>   tour.tourCode ;

    render(){
        console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW');
        console.log(this.props)
        return(
            <View style={styles.container}>
                <ReportMenu 
                    screenFunc = {this.props.screenFunc}
                />
            
                <View>
                    <FlatList 
                        data = {this.props.myTours}
                        renderItem = {this._renderMyTour}
                        keyExtractor = { this._extractKey }
                    />
                </View>
                
            </View>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
      myTours:state.tourReducer.theTours,
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
  
  
  
export default connect( mapStateToProps,mapDispatchToProps )(TourReport);


const styles = StyleSheet.create({
    container: {
      marginTop:35,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
  
  });