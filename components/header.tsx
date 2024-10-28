import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';

export default function Header() {


    return (
        <>

            <View style={styles.container}>

                <Image style={styles.image} source={require('../images/study1.jpg')} />

                <View style={styles.textView}>
                    <Text style={styles.text}> Courses</Text>
                </View>


            </View>

        </>
    );


}

const styles = StyleSheet.create({
    image: {

        height: 55,
        width: 55,
        borderRadius: 10,
        flex: 1.5


    },


    text: {
        fontWeight: 'bold',
        fontSize : 30,
        paddingRight : "20%"
    },

    textView: {
        flex: 8,
        display: "flex",
        justifyContent : 'center',
        alignItems : 'center',
        height: "100%",
        // backgroundColor: 'red'
    },

    container: {
        // backgroundColor: 'green',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    }
})