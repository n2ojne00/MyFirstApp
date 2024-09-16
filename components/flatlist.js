import { Button, Pressable, ScrollView, Text, TextInput, View } from "react-native"; 
import { useState } from "react"; 
import AntDesign from '@expo/vector-icons/AntDesign';

export default function DataList() { 
    // State to hold user data
    const [userData, setUserData] = useState([]);
    
    // State for new user input fields
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [selectedLogo, setSelectedLogo] = useState(null);

    // Function to choose the logo
    const chooseLogo = (logo) => {
        setSelectedLogo(logo);
    };

    // Function to add new user
    const addUser = () => {
        if (fname && lname && selectedLogo) {
            const newUser = {
                id: userData.length + 1, // Auto-increment the ID based on the array length
                fname: fname,
                lname: lname,
                logo: selectedLogo
            };
            
            setUserData([...userData, newUser]);
            // Reset the inputs after adding the user
            setFname('');
            setLname('');
            setSelectedLogo(null);
        } else {
            alert('Please fill out all fields and select a logo');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            {/* Input for First Name */}
            <TextInput
                placeholder="Enter First Name"
                value={fname}
                onChangeText={setFname}
                style={{
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5
                }}
            />

            {/* Input for Last Name */}
            <TextInput
                placeholder="Enter Last Name"
                value={lname}
                onChangeText={setLname}
                style={{
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5
                }}
            />

            {/* Logo Selection */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                <Pressable style={{ margin: 10 }} onPress={() => chooseLogo('areachart')}>
                    <AntDesign name="areachart" size={24} color={selectedLogo === 'areachart' ? 'blue' : 'black'} />
                </Pressable>

                <Pressable style={{ margin: 10 }} onPress={() => chooseLogo('linechart')}>
                    <AntDesign name="linechart" size={24} color={selectedLogo === 'linechart' ? 'blue' : 'black'} />
                </Pressable>

                <Pressable style={{ margin: 10 }} onPress={() => chooseLogo('home')}>
                    <AntDesign name="home" size={24} color={selectedLogo === 'home' ? 'blue' : 'black'} />
                </Pressable>
            </View>

            {/* ADD Button */}
            <Button title="ADD" onPress={addUser} />

            {/* ScrollView to display user data */}
            <ScrollView style={{ marginTop: 20 }}>
                {userData.map((user, index) => (
                    <View key={user.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, marginRight: 10 }}>
                            {user.fname} {user.lname}
                        </Text>

                        {/* Display the user's selected logo */}
                        {user.logo && <AntDesign name={user.logo} size={24} color="black" />}
                    </View>
                ))}
            </ScrollView>
        </View>
    ); 
}
