import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function Long() {
    return (

        <SafeAreaView>
            <View style = {styles.page}>
                <Text>Long</Text>
             
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
     backgroundColor: 'pink',
      height: '80%'
    },
  
  });
  
