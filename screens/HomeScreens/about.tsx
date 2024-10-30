import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

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
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
