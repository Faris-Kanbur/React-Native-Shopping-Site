import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
 
      <SafeAreaView style={styles.container}>
          <Image style={styles.logo} source={require('./image/tome.jpg')}  />
          <Text style={styles.text} >ToMe</Text>
        <View style={styles.mailpassword}>
          <TextInput keyboardType="email-address" placeholder="Enter your email" ></TextInput>
        </View>
        <View style={styles.mailpassword} >
          <TextInput keyboardType="password" placeholder="Enter your password" ></TextInput>
        </View>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.logintext}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
        <Text>For more information...<Text style={{color: 'blue'}}>Why ToMe?</Text> </Text>
        </TouchableOpacity>
        

      
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#b8fffd',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  logo:{
    width: 200,
    height: 200,
  },

  text:{
    fontSize: 38,
    fontFamily: 'times',
    fontWeight: 'bold',
    color: '#c76b11',
    letterSpacing: 5,
  },
  mailpassword:{
    margin: 10,
    backgroundColor: 'white',
    width: 360,
    borderRadius: 4,
  },

  login:{
    margin: 10,
    width: 360,
    backgroundColor: '#b4004e',
    height: 50,
    borderRadius: 4,

  },
  logintext:{
    textAlign: 'center',
    marginTop: 15,
    color: 'white',
    fontFamily: 'times',
    fontSize: 17,
    fontWeight: 'bold'
    
  }

});

export default App;
