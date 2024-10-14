import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function ShortTotal() {
    return (
        <SafeAreaView style={styles.page}>
            <View>
                <Text style={styles.text}>Short Total</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        height: '80%',
        padding: 20,
        margin: 15,
        borderRadius: 10, // Rounded corners
        shadowColor: '#000', // Add shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Android shadow
        justifyContent: 'center',
        backgroundColor: 'lightgrey', // Background color
    },
    text: {
        fontSize: 22,
        fontWeight: '600', // Bold text
        color: 'white',
        textAlign: 'center',
        letterSpacing: 1.2, // Add letter spacing
        marginBottom: 20,
    },
});
