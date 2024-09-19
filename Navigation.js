import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TypeText from './components/typehere';
import SetSkill from './components/slider';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



export default function BotNavi() {
    const Tab = createBottomTabNavigator();


    function TypeText() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>GO TO TYPE</Text>

            </View>
        );
    }
    
    function SetSkill() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SET YOUR SKILLS</Text>

            </View>
        );
    }

    
    
  return (
    <NavigationContainer>
    <Tab.Navigator  screenOptions={{
        tabBarStyle: { position: 'absolute' },
      }}>
      <Tab.Screen name="Home" component={TypeText} />
      <Tab.Screen name="SetSkill" component={SetSkill} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}