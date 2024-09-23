import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function ShortTotal() {
    return (

        <SafeAreaView>
            <View style = {styles.page}>
                <Text>Long Total</Text>
             
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
     backgroundColor: 'grey',
      height: '80%'
    },
  
  });
  