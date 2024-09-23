
import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SelectButton from '../components/select_button';
import GroupedButtons from '../components/grouped_buttons_home';
import GroupedButtonsShortLong from '../components/grouped_buttons_short_long';
import Short from './CoursesScreens/short_courses';
import Long from './CoursesScreens/long_courses';

export default function CoursesScreen() {

    const [selectedOption, setSelectedOption] = React.useState('Long');

    return (
        <SafeAreaView>
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