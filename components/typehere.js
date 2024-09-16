import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function TypeText() {
  //tilamuuttuja
  const [name, setName] = useState(''); //can set useState('Netta') to show it when app is opened

    //recognizes input text
    function inputText(text){
      console.log(text)
      setName(text);
    }
    
return (

<View>    

  <TextInput 
  style={
    {borderWidth: 1, width: 200, padding: 5}}
    onChangeText={inputText} //<-- can change inputText as setName
    //value={name} //Checks set value on name
    //keyboardType='decimal-pad'  you'll get numberpad
  />

<Text>{name}</Text>

<Button title ='PRESS HERE' 
onPress={() => console.log("button pressed")}
color={"#7e80fd"}
/>

</View>
);

}