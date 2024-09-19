import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Button, Image, Pressable,  ScrollView,  StyleSheet, Text, TextInput, View } from 'react-native';
import logo from './assets/favicon.png';
import UserInfo from './components/userInfo';
import DataList from './components/flatlist';
import TypeText from './components/typehere';
import BotNavi from './Navigation';


export default function App() {

  return (

    <View style={styles.container}>
      
        <ScrollView>

          <Pressable onPress={() => console.log("Logo pressed")} style={{ borderWidth: 2, borderColor: "#fd23dd", borderRadius: 50 }}>
            <Image source={logo} />
          </Pressable>

          {//<TypeText/> 
          }

          <UserInfo fname={'Netta'} lname={'Ojala'} />
          <DataList />


        </ScrollView>
        <BotNavi/>
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

