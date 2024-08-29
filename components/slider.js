import Slider from "@react-native-community/slider";
import { Col, Grid } from "react-native-easy-grid";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";



export default function SetSkill() {

    const SKILLS = ['Frontend', 'Backend', 'Mobile', 'Databases'];
    const MIN = 0;
    const MAX = 5;

    const [values, setValues] = useState(new Array(SKILLS.length).fill(0));
    const [average, setAverage] = useState(0);

    const setSkillValue = (val, i) => {  // Arrow function
        let skillValues = [...values];   // Assuming values is defined elsewhere
        skillValues[i] = val;            // Sets the value at the index i
        setValues(skillValues);          // Calls the function to update the values
    };                                   // Semicolon ends the statement here
    

    //calculates Average of the skills, function reduce() is used here for calculating the sum.
    const calculateAverageSkill = () => {
        const sum = values.reduce((a, b) => a + b, 0);
        const avg = (sum / values.length) || 0;
        setAverage(avg);
    }

    useEffect(() => {
        calculateAverageSkill();
    }, [values]);

    const items = [];

    for (let i = 0; i < SKILLS.length; i++) {
        items.push(
            <View key={"item" + i} style={styles.skills}>
                <Text style={styles.skill}>{SKILLS[i]}</Text>
                <Text style={styles.value}>Skill: {values[i]}</Text>
                <Grid style={styles.grid}>
                    <Col size={5}><Text>{MIN}</Text></Col>
                    <Col size={90}>
                    <Slider style={styles.slider}
                    minimumValue={MIN}
                    maximumValue={MAX}
                    step={1}
                    minimumTrackTintColor="#00638a"
                    maximumTrackTintColor="#ff7070"
                    value={values[i]}
                    onValueChange={(val) => setSkillValue(val, i)}/>
                    </Col>
                    <Col size={5}><Text>{MAX}</Text></Col>

                </Grid>

            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>Skill set</Text>
                <View>{items}</View>
                <Text style={styles.averageHeader}>Average</Text>
                <Text style={styles.averageValue}>{average}</Text>
            </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 40
    },
    skills: {
        alignItems: 'center'
    },
    header: {
        textAlign:'center',
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold'
    },
    grid: {
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    skill: {
        marginTop: 10,
        fontSize: 25

    },
    slider: {
        width: 280,
        height: 40

    },
    value: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 20

    },
    averageHeader: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 25

    },
    averageValue: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 40
    }

})
