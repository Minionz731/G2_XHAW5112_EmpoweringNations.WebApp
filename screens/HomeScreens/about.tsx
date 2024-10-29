import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function About() {
    return (

        <SafeAreaView>
            <View style={styles.page}>
                <Text style={styles.head}>Founder Precious Radebe</Text>
                <Text style={styles.text}>

                    The SME, founded by Precious Radebe, offers skills training for domestic workers and gardeners, 
                    inspired by her desire to help others in her community who, like her parents, 
                    didn’t have opportunities to pursue formal education or skill development. {"\n\n"}


                    Her training equips domestic workers and gardeners with valuable skills,
                     making them more competitive for higher-paying jobs and enabling them to start their own small businesses. 
                     Many employers also appreciate having more skilled workers who can offer enhanced services at home.

                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        justifyContent: "center",
        height: '75%',
        display: "flex",
        marginTop: 5
    },

    head: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",

    },


    text: {
        fontSize: 18,
        marginTop: 5,
        padding : 10
    }

});

