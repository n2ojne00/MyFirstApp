import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const TYPE = 'Type some text';
const SKILL = 'Skills';

const icons = {
    [TYPE]: 'filetext1',
    [SKILL]: 'bars',
}


export default function BotNavi() {
    
  return (
    
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen 
      name={TYPE} 
      component={TypeSome}
      options={{tabBarIcon: () => <AntDesign name={icons[TYPE]} size={24} color="black" />}} />
      <Tab.Screen 
      name={SKILL} 
      component={SettingSkill}
      options={{tabBarIcon: () => <AntDesign name={icons[SKILL]} size={24} color="black" />}} />
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const TypeSome = () => <View style={{backgroundColor: '#dd45ff', flex: 1}}/>
const SettingSkill = () => <View style={{backgroundColor: '#45ff6d', flex: 1}}/>