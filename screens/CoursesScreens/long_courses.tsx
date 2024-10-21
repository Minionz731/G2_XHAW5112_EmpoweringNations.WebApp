import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CourseCard from '../../components/card_course';



export default function Long() {

    const data = [
        {
            name: "Book keeping",
            description: "Learning",
            duration: "5 Min"
        },
        {
            name: "Liriarian",
            description: "Learning",
            duration: "5 Min"
        },
        {
            name: "Shop Teller",
            description: "Learning",
            duration: "5 Min"
        }
    ]
    return (

        <SafeAreaView>
            <View style={styles.page}>
                <Text>Long</Text>

                {data.map((item) => {
                    return <CourseCard
                        name={item.name}
                        description={item.description}
                        duration={item.duration}
                        onPress={() => { }}
                    ></CourseCard>
                })}


            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'pink',
        height: '95%',
        alignItems: "center"
    },

});

