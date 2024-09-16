import { Button, Text, View } from "react-native";

export default function UserInfo ( {fname, lname}) {
    return (
      <View>
        <Text>{fname}</Text>
        <Text>{lname}</Text>
      </View>
    )
  }