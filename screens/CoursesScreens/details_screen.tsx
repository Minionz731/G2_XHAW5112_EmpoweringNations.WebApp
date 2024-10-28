import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

interface DetailsInterface {
    name: string,
    description: string,
    image: any,
    information: string,
    date: string,
    price : string

}



export default function Details({ name, description, image, information, date, price }: DetailsInterface) {


    return (
        <SafeAreaView>
            <View style={styles.page}>
                <Text style={styles.textHeader}>{name}</Text>
                <Text style={styles.textSub}>{description} </Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={image} />
                    <Text style={styles.textImage}>{information}</Text>
                </View>
                <Text style={styles.textDate}>Date : {date}</Text>
                <Text style={styles.textDate}>Price : {price}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textDate: {

        fontSize: 18,
        textAlign: "center",
        marginTop: 10
    },

    textHeader: {
        fontWeight: "bold",
        fontSize: 30
    },
    textSub: {

        fontSize: 18,
        textAlign: "center"
    },

    imageContainer: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 80,
       alignItems: "center"
    },

    textImage: {


        textAlignVertical: "center",
        marginHorizontal: 8
    },


    image: {
        width: 150,
        height: 150,
        borderRadius: 10
    },

    container: {
        width: "100%",
        paddingHorizontal: 10
    },


    page: {
        height: '95%',
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-evenly"


    },

});

