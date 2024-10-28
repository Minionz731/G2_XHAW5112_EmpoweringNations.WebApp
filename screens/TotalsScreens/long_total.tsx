import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

//better

interface numberProp {
    setChecked1: (value: boolean) => void;
    setChecked2: (value: boolean) => void;
    setChecked3: (value: boolean) => void;
    setChecked4: (value: boolean) => void;
    isChecked1: boolean;
    isChecked2: boolean;
    isChecked3: boolean;
    isChecked4: boolean;
}

export default function LongTotal({ setChecked1, setChecked2, setChecked3, setChecked4, isChecked1,isChecked2,isChecked3,isChecked4 }: numberProp) {



    const study1Image = require('../../images/study2.png');
    const study2Image = require('../../images/study3.png');
    const study3Image = require('../../images/study4.png');
    const study4Image = require('../../images/study5.png');



    const data = [
        {
            name: "First Aid",
            image: study1Image,
            price: 1500,
            value: isChecked1,
            setChecked: () => setChecked1(!isChecked1),
        },
        {
            name: "Sewing",
            image: study2Image,
            price: 1500,
            value: isChecked2,
            setChecked: () => setChecked2(!isChecked2),
        },
        {
            name: "Landscaping",
            image: study3Image,
            price: 1500,
            value: isChecked3,
            setChecked: () => setChecked3(!isChecked3),
        },
        {
            name: "Life Skills",
            image: study4Image,
            price: 1500,
            value: isChecked4,
            setChecked: () => setChecked4(!isChecked4),
        },
    ];

    return (
        <SafeAreaView>
            <View style={styles.page}>
                {data.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Image style={styles.image} source={item.image} />
                        <Text>{item.name}</Text>
                        <View style={styles.radio}>
                            <RadioButton
                                value={item.name}
                                status={item.value ? 'checked' : 'unchecked'}
                                onPress={item.setChecked}
                            />
                        </View>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 10,
        margin: 10,
    },
    card: {
        backgroundColor: 'white',
        height: 100,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5, // For Android
    },
    page: {
        height: '95%',
        backgroundColor: 'white', // Background color set to white
        padding: 10, // Reduced padding for the top
        margin: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: 'flex-start', // Changed to flex-start
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        letterSpacing: 1.2,
        marginBottom: 20,
    },
    radio: {
        marginHorizontal: 20,
    },
})