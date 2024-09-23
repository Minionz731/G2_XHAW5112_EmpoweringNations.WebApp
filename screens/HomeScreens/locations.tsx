import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function Locations() {
    return (

        <SafeAreaView>
            <View style = {styles.page}>
                <Text>Location</Text>
             
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
     backgroundColor: 'yellow',
      height: '80%'
    },
  
  });
  