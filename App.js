import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable,  ScrollView,  StyleSheet, Text, TextInput, View } from 'react-native';
import logo from './assets/favicon.png';
import UserInfo from './components/userInfo';
import { useState } from 'react';
import SetSkill from './components/slider';
import DataList from './components/flatlist';


export default function App() {

  return (
    
    <View style={styles.container}>
      <ScrollView>

      <Pressable onPress={() => console.log("Logo pressed")} style={{borderWidth: 2, borderColor: "#fd23dd", borderRadius: 50}}>
      <Image source={logo}/>
      </Pressable>

      <TypeText/>
      
      <UserInfo fname={'Netta'} lname={'Ojala'}/>
      
    
      </ScrollView>
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

