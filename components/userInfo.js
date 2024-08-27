export default function UserInfo ( {fname, lname}) {
    return (
      <View>
        <Text>{fname}</Text>
        <Text>{lname}</Text>
        <Button title='Accept user info'/>
      </View>
    )
  }