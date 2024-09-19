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

    const setSkillValue = (val, i) => { 
        let skillValues = [...values];  
        skillValues[i] = val;            
        setValues(skillValues);          
    };                                   
    

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
            <View key={"item" + i} style={sliderstyles.skills}>
                <Text style={sliderstyles.skill}>{SKILLS[i]}</Text>
                <Text style={sliderstyles.value}>Skill: {values[i]}</Text>
                <Grid style={sliderstyles.grid}>
                    <Col size={5}><Text>{MIN}</Text></Col>
                    <Col size={90}>
                    <Slider style={sliderstyles.slider}
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
        <SafeAreaView style={sliderstyles.stylebox}>
            <ScrollView>
                <Text style={sliderstyles.header}>Skill set</Text>
                <View>{items}</View>
                <Text style={sliderstyles.averageHeader}>Average</Text>
                <Text style={sliderstyles.averageValue}>{average}</Text>
            </ScrollView>
        </SafeAreaView> //rendeding content within the sade area boundaries of a devi
        
    )
}

const sliderstyles = StyleSheet.create({
    stylebox: {
        flex: 1,
        backgroundColor: '#fff',
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
        alignItems: 'center',
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
        fontSize: 40
    }

});
