import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function Short() {
    return (

        <SafeAreaView>
            <View style = {styles.page}>
                <Text>Short</Text>
             
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
     backgroundColor: 'green',
     height: '80%'
    },
  
  });
  
