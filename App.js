import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/favicon.png';
import UserInfo from './components/userInfo';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo}/>
      <Text>Toimiiko</Text>
      <Button title ='PRESS HERE'/>
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
