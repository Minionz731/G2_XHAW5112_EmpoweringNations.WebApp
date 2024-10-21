import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';



export default function LongTotal() {

    const data = [{
        name: "Cleaning"
    },
    {
        name: "Washing"
    },
    {
        name: "Paintinf"
    },
    {
        name: "Paintinf"
    },

    ]


    return (
        <SafeAreaView >
            <View style={styles.page}>


                {
                    data.map((item) => {

                        return <View style={styles.card}>
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

                    })}








            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 10,
        margin: 10
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
        justifyContent: "space-between"
    },

    page: {
        height: '95%',
        backgroundColor: 'yellow',
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
        marginHorizontal: 20
    }
});


