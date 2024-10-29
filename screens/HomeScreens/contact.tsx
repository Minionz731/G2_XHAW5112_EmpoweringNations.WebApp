import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
// Author : Meta
// Link : https://reactnative.dev/
export default function Contact() {
    const handleEmailPress = () => {
       
        Linking.openURL('mailto:nations@gmail.com');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.page}>
               

                <Text style={styles.contactDetail}>Phone: (123) 456-7890</Text>
                <Text style={styles.contactDetail}>Address: 123 Main Street, City, Country</Text>
                
                <TouchableOpacity onPress={handleEmailPress}>
                    <Text style={styles.email}>Email: nations@gmail.com</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: 300 ,
         justifyContent: 'center',
        alignItems: "center"
    },
    page: {
        justifyContent: 'center',
        alignItems: "center"
    },
    header: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    contactDetail: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
        textAlign: 'center',
    },
    email: {
        fontSize: 18,
        color: '#007BFF', // Blue color for email link
        textAlign: 'center',
        textDecorationLine: 'underline', // Underline to indicate it's clickable
    },
});
