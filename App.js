import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/favicon.png';
import UserInfo from './components/userInfo';

export default function App() {

  function buttonPressed() {
    console.log("button pressed");
  }


  return (
    <View style={styles.container}>
      <Image source={logo}/>
      <Text>Toimiiko</Text>

      <Button title ='PRESS HERE' onPress={buttonPressed}/>

      <UserInfo fname={'Netta'} lname={'Ojala'}/>
      <UserInfo fname={'Ukko'} lname={'Pekka'}/>
      
     
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
