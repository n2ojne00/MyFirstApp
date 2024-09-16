
import { Button, Image, Pressable,  StyleSheet, Text, TextInput, View } from 'react-native';
import logo from './assets/favicon.png';
import UserInfo from './components/userInfo';
import { useState } from 'react';
//import SetSkill from './components/slider';
import TypeText from './components/typehere';
import Spinner from './components/inputspinner';


export default function App() {

  return (
    
    <View style={styles.container}>

      <Pressable onPress={() => console.log("Logo pressed")} style={{borderWidth: 2, borderColor: "#fd23dd", borderRadius: 50}}>
      <Image source={logo}/>
      </Pressable>

      <TypeText/>
      
      <UserInfo fname={'Netta'} lname={'Ojala'}/>
      
      <Spinner/>
      
    
     
    </View>
  
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

