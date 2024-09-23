import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button,  } from 'react-native';

export default function SelectButton() {


    return (
        <>
            <Button
                title="Hello" // Correct way to set the button label
                onPress={() => alert('Button Pressed!')} // Add an onPress event
            />
        </>
    );


}