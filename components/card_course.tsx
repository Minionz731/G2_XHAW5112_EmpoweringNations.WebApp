import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

interface CourseCardProps {
    name: string;
    duration: string;
    description: string;
    onPress: () => void;
  }


  const CourseCard: React.FC<CourseCardProps> = ({ name, duration, description, onPress }) => {
    return (
        <View style={style.container}>
            <Text style={style.textHead}>{name}</Text>

            <View style={style.row}>
                <Image style={style.image} source={require('../images/study1.jpg')} />
                <View style={style.textText}>
                    <Text>Duration : {duration}</Text>
                    <Text>Long Course</Text>

                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}> touch</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );

}

const style = StyleSheet.create({
    container: {
        height: 190,
        width: "90%",
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 20,
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
        marginVertical: 10
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
