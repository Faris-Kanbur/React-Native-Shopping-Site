import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
 
      <SafeAreaView style={styles.container}>
        <View>
          
        </View>
        <Image style={styles.logo} source={require('./image/tome.jpg')}  />
        <Text style={styles.text} >ToMe</Text>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#b8fffd',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
    
  },
  logo:{
    width: 200,
    height: 200,
  },

  text:{
    fontSize: 35,
    fontFamily: 'times',
    fontWeight: 'bold',
    color: '#c76b11',
    letterSpacing: 5,
    
    
  }

});

export default App;
