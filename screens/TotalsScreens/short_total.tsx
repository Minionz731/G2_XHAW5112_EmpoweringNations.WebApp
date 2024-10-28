import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface numberProp {
    setChecked5: (value: boolean) => void;
    setChecked6: (value: boolean) => void;
    setChecked7: (value: boolean) => void;
  
    isChecked5: boolean;
    isChecked6: boolean;
    isChecked7: boolean;
   
}

export default function ShortTotal({ setChecked5, setChecked6, setChecked7, isChecked5,isChecked6,isChecked7}: numberProp) {

  

    const study1Image = require('../../images/study6.png');
    const study2Image = require('../../images/study7.png');
    const study3Image = require('../../images/study8.png');

  
    const data = [
        {
            name: "Child Minding",
            image: study1Image,
            price: 750,
            value: isChecked5,
            setChecked: () => setChecked5(!isChecked5),
        },
        {
            name: "Cooking",
            image: study2Image,
            price: 750,
            value: isChecked6,
            setChecked: () => setChecked6(!isChecked6),
        },
        {
            name: "Garden Maintenance",
            image: study3Image,
            price: 750,
            value: isChecked7,
            setChecked: () => setChecked7(!isChecked7),
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
});
