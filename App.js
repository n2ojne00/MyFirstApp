import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import logo from './assets/favicon.png';
import UserInfo from './components/userInfo';

export default function App() {

    function inputText(text){
      console.log(text)
    }
  
  return (
    <View style={styles.container}>
      <Image source={logo}/>
      <Text>Toimiiko</Text>


      <Button title ='PRESS HERE' onPress={() => console.log("button pressed")}/>

        <TextInput 
        style={
          {borderWidth: 1, width: 100, padding: 5}}
          onChangeText={inputText}
        />
      <UserInfo fname={'Netta'} lname={'Ojala'}/>
      
     
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
