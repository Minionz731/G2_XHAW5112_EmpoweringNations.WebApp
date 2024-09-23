import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import GroupedButtonsShortLong from '../components/grouped_buttons_short_long';
import LongTotal from './TotalsScreens/long_total';
import ShortTotal from './TotalsScreens/short_total';

export default function TotalsScreen() {
    const [selectedOption, setSelectedOption] = React.useState('Long');
    return (

        <SafeAreaView>
            <View>
            <GroupedButtonsShortLong
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption} ></GroupedButtonsShortLong>
                {
                    selectedOption == 'Long' ? <LongTotal/> : <ShortTotal/>
                }
            </View>
        </SafeAreaView>
    );
}
