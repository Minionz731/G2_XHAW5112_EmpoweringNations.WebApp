import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function LongTotal() {
    return (

        <SafeAreaView>
            <View style = {styles.page}>
                <Text>Long total</Text>
             
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
  
