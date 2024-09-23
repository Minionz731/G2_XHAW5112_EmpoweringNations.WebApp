import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function Contact() {
    return (

        <SafeAreaView>
            <View style = {styles.page}>
                <Text>Contact</Text>
             
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
     backgroundColor: 'brown',
      height: '80%'
    },
  
  });
  