import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import logo from './assets/favicon.png';
import UserInfo from './components/userInfo';
import { useState } from 'react';
import SetSkill from './components/slider';


export default function App() {

  //tilamuuttuja
  const [name, setName] = useState(''); //can set useState('Netta') to show it when app is opened

    //recognizes input text
    function inputText(text){
      console.log(text)
      setName(text);
    }
  
  return (
    <View style={styles.container}>

      <Pressable onPress={() => console.log("Logo pressed")} style={{borderWidth: 2, borderColor: "#fd23dd", borderRadius: 30}}>
      <Image source={logo}/>
      </Pressable>

      <Button title ='PRESS HERE' 
      onPress={() => console.log("button pressed")}
      color={"#7e80fd"}/>
        <TextInput 
        style={
          {borderWidth: 1, width: 100, padding: 5}}
          onChangeText={inputText} //<-- can change inputText as setName
          //value={name} //Checks set value on name
          //keyboardType='decimal-pad'  you'll get numberpad
        />
        <Text>{name}</Text>

      <UserInfo fname={'Netta'} lname={'Ojala'}/>
      
      <SetSkill/>
     
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
