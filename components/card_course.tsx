import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

interface CourseCardProps {
    name: string;
    duration: string;
    description: string;
    onPress: () => void;
    image : any
}


const CourseCard: React.FC<CourseCardProps> = ({ name, duration, description, onPress, image }) => {
    return (
        <View style={style.container}>
            <Text style={style.textHead}>{name}</Text>

            <View style={style.row}>
                <Image style={style.image} source={image} />
                <View style={style.textText}>
                    <Text style={style.description}>Duration : {duration}</Text>
                    <Text style={style.description}>{description}</Text>

                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText} onPress={onPress}> Details</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );

}

const style = StyleSheet.create({
    container: {
        height: 190,
        width: "100%",
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 20,

        elevation: 5

    },

    description: {
        marginVertical: 5,
        textAlign: "center"
    },

    image: {
        height: 120,
        width: 150,
        margin: 10,
        borderRadius: 15,
        flex: 1
    },
    textHead: {
        textAlign: "center",
        marginVertical: 10,
        fontWeight: "bold"
    },

    row: {
        flexDirection: "row"
    },

    textText: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20
    },

    button: {
        backgroundColor: "black",
        borderRadius: 10
    },

    buttonText: {
        color: "white",
        textAlign: "center",
        paddingVertical: 5,

    }
});


export default CourseCard;
