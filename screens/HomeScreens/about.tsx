import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function About() {
    return (

        <SafeAreaView>
            <View style = {styles.page}>
                <Text>About</Text>
             
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
     backgroundColor: 'orange',
      height: '80%'
    },
  
  });
  
