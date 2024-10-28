import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import GroupedButtonsShortLong from '../components/grouped_buttons_short_long';
import LongTotal from './TotalsScreens/long_total';
import ShortTotal from './TotalsScreens/short_total';
import Header from '../components/header';


export default function TotalsScreen() {
    const [selectedOption, setSelectedOption] = React.useState('Long');
    const [longCount, setLongCount] = React.useState(0);
    const [shortCount, setShortCount] = React.useState(0);

    const [isChecked1, setChecked1] = React.useState(false);
    const [isChecked2, setChecked2] = React.useState(false);
    const [isChecked3, setChecked3] = React.useState(false);
    const [isChecked4, setChecked4] = React.useState(false);

    const [isChecked5, setChecked5] = React.useState(false);
    const [isChecked6, setChecked6] = React.useState(false);
    const [isChecked7, setChecked7] = React.useState(false);

    const [longNumber, setLongNumber] = React.useState(0);
    const [shortNumber, setShortNumber] = React.useState(0);
    const [amount, setAmount] = React.useState(0);

    const LONG_COURSE_PRICE = 1500;
    const SHORT_COURSE_PRICE = 750;

    // Function to count the selected items for long options
    function calculateLong() {
        const total = [isChecked1, isChecked2, isChecked3, isChecked4];
        const count = total.filter(item => item).length;
        setLongNumber(count);
    }

    // Function to count the selected items for short options
    function calculateShort() {
        const total = [isChecked5, isChecked6, isChecked7];
        const count = total.filter(item => item).length;
        setShortNumber(count);
    }

    // Function to calculate the total amount
    function calculateAmount() {
        const totalCourses = longNumber + shortNumber;
        let totalAmount = (longNumber * LONG_COURSE_PRICE) + (shortNumber * SHORT_COURSE_PRICE);
        let discount = 0;

        // Determine the discount based on the number of courses
        if (totalCourses === 1) {
            discount = 0;
        } else if (totalCourses === 2) {
            discount = 0.05; // 5%
        } else if (totalCourses === 3) {
            discount = 0.10; // 10%
        } else if (totalCourses > 3) {
            discount = 0.15; // 15%
        }

        totalAmount -= totalAmount * discount; // Apply the discount
        setAmount(totalAmount);
    }

    // Call calculate whenever any checkbox is toggled
    React.useEffect(() => {
        calculateLong();
        calculateShort();
    }, [isChecked1, isChecked2, isChecked3, isChecked4, isChecked5, isChecked6, isChecked7]);

    // Call calculateAmount whenever longNumber or shortNumber changes
    React.useEffect(() => {
        calculateAmount();
    }, [longNumber, shortNumber]);

    return (
        <SafeAreaView style={styles.space}>
            <View>
                <Header title='Totals' />
                <GroupedButtonsShortLong
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
                <View style={styles.calculator}>
                    <Text  >Total Amount : {amount.toFixed(2)}</Text>
                </View>
                {
                    selectedOption === 'Long' ? (
                        <LongTotal
                            setChecked1={setChecked1}
                            setChecked2={setChecked2}
                            setChecked3={setChecked3}
                            setChecked4={setChecked4}
                            isChecked1={isChecked1}
                            isChecked2={isChecked2}
                            isChecked3={isChecked3}
                            isChecked4={isChecked4}
                        />
                    ) : (
                        <ShortTotal
                            setChecked5={setChecked5}
                            setChecked6={setChecked6}
                            setChecked7={setChecked7}
                            isChecked5={isChecked5}
                            isChecked6={isChecked6}
                            isChecked7={isChecked7}
                        />
                    )
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    calculator: {
        backgroundColor: "white",
        height: 40,
        borderRadius : 10,
        marginHorizontal :10,
        elevation: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    space: {
        marginTop: 20
    }
})