import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from 'react-native';

import FirmaHomeTouchable from './firmaHomeMenu/firmaHomeTouchables';

class FirmaScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firmInfo:{
        name: 'ERTÜRK TOURS'
      }
    }
  }
  static navigationOptions = {
    title: 'ANASAYFA',
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

        <View style = { styles.firmaInfo }>
          <Text style= {[styles.text]}>{ this.state.firmInfo.name }</Text>
          <Button 
            title="Çıkış Yap" 
            onPress={this._signOutAsync}
            titleStyle= {[styles.text,styles.exitButton]}
          />
          <StatusBar barStyle="default" />
        </View>
          
        <View style={styles.firmaTouchableView}>
          <View style = { [ styles.threePart ] }>
            <FirmaHomeTouchable 
              menuName = { 'Tur\noluştur' }
              navTo = 'TurOlustur'
              myNavigate = { this.props.navigation.navigate }
            />
            <FirmaHomeTouchable 
              menuName = { 'Fiyatlandır' }
              navTo = 'TurFiyatlandır'
              myNavigate = { this.props.navigation.navigate }
            />
            <FirmaHomeTouchable 
              menuName = { 'Raporlar' }
              navTo = 'TurReporlar'
              myNavigate = { this.props.navigation.navigate }
            />
          </View>
          <View style = { [ styles.threePart ] }>
            <FirmaHomeTouchable 
              menuName = { '  Günlük\nRez..lar' }
              navTo = 'TurGünlükRez'
              myNavigate = {this.props.navigation.navigate}
            />
            <FirmaHomeTouchable 
              menuName = { ' İki Tarih\n Arası\n Rez..lar' }
              navTo = 'TurİkiTarihRez'
              myNavigate = {this.props.navigation.navigate}
            />
            <FirmaHomeTouchable 
              menuName = { ' Rez..\n Ekle' }
              navTo = 'TurRezEkle'
              myNavigate = {this.props.navigation.navigate}
            />
          </View>
          <View style = { [ styles.threePart ] }>
            <FirmaHomeTouchable
              menuName = { 'Acentalarım' }
              navTo = 'TurAcentalar'
              myNavigate = {this.props.navigation.navigate}
            />
            <FirmaHomeTouchable 
              menuName = { 'Ayarlar' }
              navTo = 'TurAyarlar'
              myNavigate = {this.props.navigation.navigate}
            />
            <FirmaHomeTouchable menuName = { '.....' }/>
          </View>
        </View>
        
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default FirmaScreen;

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