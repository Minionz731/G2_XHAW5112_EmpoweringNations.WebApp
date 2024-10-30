import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

<<<<<<< HEAD
export default function About() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.page}>
                <Text style={styles.heading}>About Empowering the Nations</Text>
                <Text style={styles.description}>
                    Empowering the Nations is dedicated to providing high-quality training programs that help individuals unlock their potential and enhance their skills.
                </Text>
                <Text style={styles.mission}>
                    Our Mission: To empower individuals through education and practical skills that lead to successful careers.
=======
// Author : Meta
// Link : https://reactnative.dev/
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


>>>>>>> 0c3a1a8793e04c1ce22c0ba47fb57dd7a8845fdf
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    page: {
        backgroundColor: 'grey',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    mission: {
        fontSize: 16,
        fontStyle: 'italic',
        color: 'lightgray',
        textAlign: 'center',
    },
});
=======
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

>>>>>>> 0c3a1a8793e04c1ce22c0ba47fb57dd7a8845fdf
