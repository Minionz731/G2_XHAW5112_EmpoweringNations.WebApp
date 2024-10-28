import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
//better

export default function LongTotal() {
    const data = [
        { name: "First Aid" },
        { name: "Sewing" },
        { name: "Landscaping" },
        { name: "Life Skills" },
    ];

    return (
        <SafeAreaView>
            <View style={styles.page}>
                {data.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Image style={styles.image} source={require('../../images/study1.jpg')} />
                        <Text>{item.name}</Text>
                        <View style={styles.radio}>
                            <RadioButton
                                value="first"
                                status={"checked"}
                                onPress={() => { }}
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