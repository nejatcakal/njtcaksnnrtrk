import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text
} from 'react-native';
//import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'

//users array
const myUsers = [
    {
        success:true,
        user:{
            userName:'Sinan',
            userPass: '123',
            userType:'firma'
        }
    },
    {
        success:true,
        user:{
            userName:'Nejat',
            userPass: '566',
            userType:'Acenta'
        }
    },
    {
        success:true,
        user:{
            userName:'Ferhat',
            userPass: '789',
            userType:'Satıcı'
        }
        
    },
]

class SignInScreen extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            username:'Ferhat',
            password: '123456'
        }

        //this.findMyuser = this.findMyuser.bind( this );
    }

    static navigationOptions = {
        title: 'Lütfen Giriş Yapın',
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
  
    //METHODS
    
    findMyuser = ( usersArray ) => {
        let userTypedName = this.state.username;
        let userTypedPass = this.state.password;
        let defaultUser = { success:false };
        for( var i = 0; i < usersArray.length; i++ ){
            if( usersArray[i].user.userName == userTypedName && usersArray[i].user.userPass == userTypedPass){
                 defaultUser = usersArray[i];
                 break;
            }
        }
        return defaultUser;
    }

    _signInAsync = async () => {
        /*fetch( 'http://192.168.1.103/goorso/api/control.php',  {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user:{
                    kadi: this.state.username,
                    sifre: this.state.password,
                },
                ApiMobil:true,
                type:'login',

            })
         }).then((response) => response.json())
            .then((responseJson) => {
          if( responseJson.success ){ 
            AsyncStorage.setItem('userToken', responseJson.kadi)
                .then(this.props.navigation.navigate(responseJson.KGKodu));
            }else{
                alert( 'Lütfen Giriş Bilgilerini Doğru giriniz!' );
          }
            }).catch((error) => {
          console.error(error);
        });*/

        let theObj = myUsers[0];
        if( theObj.success ){ 
            await AsyncStorage.setItem('userToken', theObj.user.userType);
            this.props.navigation.navigate(theObj.user.userType);
            console.log( theObj );
        }else{
            alert( 'Lütfen Giriş Bilgilerini Doğru giriniz!' );
        }
        
      };
    //RENDER
    render() {
        //console.log( myUsers.find(obj => obj.user.userName == this.state.username ) );
      return (
        <View style={styles.container}>
 
            <View style={styles.eachElem}>
                <Text style={styles.TandI}>Kullanıcı adı:</Text>
                <TextInput
                    style={[styles.TandI, styles.onlyI]}
                    placeholder='Telefon numaranızı giriniz'
                    onChangeText = {(username) => this.setState({username})}>
                </TextInput>
            </View>

            <View style={styles.eachElem}>
                <Text style={styles.TandI}>Şifreniz:</Text>
                <TextInput
                    style={[styles.TandI, styles.onlyI]}
                    placeholder='Şifrenizi giriniz'
                    onChangeText = {(password) => this.setState({password})}
                    secureTextEntry = { true }>
                </TextInput>
            </View>

            <TouchableOpacity 
                style={styles.eachElem}
                onPress={this._signInAsync}>
                <Text style={styles.TandI}>Giriş Yap</Text>
            </TouchableOpacity>
      </View>
      );
    }
  }

  //EXPORT
  export default SignInScreen;

  //STYLES
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems: 'center',
      backgroundColor:'#4682b4'
    },

    eachElem:{
    width:'100%',
    alignItems:'center'
    },

    TandI:{
    fontSize:25
    },

    onlyI:{
    borderBottomWidth:1,
    }

  });