
import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SelectButton from '../components/select_button';
import GroupedButtons from '../components/grouped_buttons_home';
import GroupedButtonsShortLong from '../components/grouped_buttons_short_long';
import Short from './CoursesScreens/short_courses';
import Long from './CoursesScreens/long_courses';
import Header from '../components/header';


export default function CoursesScreen() {

    const [selectedOption, setSelectedOption] = React.useState('Long');

    return (
        <SafeAreaView style = {styles.space}>
            <Header></Header>
            <View>
                <GroupedButtonsShortLong
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption} ></GroupedButtonsShortLong>
                {
                    selectedOption == 'Long' ? <Long/> : <Short/>
                }

            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    space: {
        marginTop : 30
    }
})