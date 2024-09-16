import { useState } from "react";
import { View } from "react-native";
import InputSpinner from "react-native-input-spinner";

export default function Spinner() {

    const [num, setNum] = useState(1);
    console.log(num);

    return(
        <View>
            <InputSpinner
            max={20}
            min={1}
            value={num}
            onChange={setNum}
            skin="paper"

            />

        </View>

    );
}