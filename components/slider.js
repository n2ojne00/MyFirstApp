import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";



export default function SetSkill() {

    const [value, setValue] = useState(0);

    return (
        <View 
         style>
            <Text>Value: {value} </Text> 
            <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={value}
            minimumTrackTintColor="#00638a"
            maximumTrackTintColor="#ff7070"
            onValueChange={(val) => setValue(val)}
            
        />
        </View>
    )
}
