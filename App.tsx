/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const [randomBground,setrandomBground] = useState("#FAFAFA")

  const generateColor = () =>{
    const range="0123456789ABCDEF"
    let color="#"
    for (let index = 0; index < 6; index++) {
      color+= range[Math.floor(Math.random() * 16)]
      
    }
    setrandomBground(color)
  }


  return (
    <>
    
    <View style={[styles.container,{backgroundColor:randomBground}]}>
    <StatusBar backgroundColor={randomBground}/>
      <TouchableOpacity
      onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtntxt}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  }, 
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#895678",
    paddingLeft:12,
    paddingRight:12,
    paddingHorizontal:40,
    paddingVertical:40
  },
  actionBtntxt:{
    fontSize:24,
    color:"#FFFF88",
    textTransform:"uppercase"
  }
});

export default App;
