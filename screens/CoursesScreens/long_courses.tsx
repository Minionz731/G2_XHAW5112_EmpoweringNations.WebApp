import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import CourseCard from '../../components/card_course';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Details from './details_screen';


// Author : Meta
// Link : https://reactnative.dev/
export default function Long() {


    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('null');
    const [information, setInformation] = React.useState('');
    const [date, setDate] = React.useState('');
    const [price, setPrice] = React.useState('');

    const study1Image = require('../../images/study2.png');
    const study2Image = require('../../images/study3.png');
    const study3Image = require('../../images/study4.png');
    const study4Image = require('../../images/study5.png');
    // (Stockcake,2024)

    const LongData = [
        {
            name: "First Aid",
            description: "Aid awareness ",
            duration: "6 Months",
            date: '25 June 2025',
            information: "Wounds and bleeding\n\nBurns and fractures\n\nEmergency scene management\n\nCardio-Pulmonary Resuscitation (CPR)\n\nRespiratory distress e.g., Choking, blocked airway",
            image: study1Image,
            price: "R1500"
        },
        {
            name: "Sewing",
            description: "alterations Service",
            duration: "6 Months",
            date: '25 June 2025',
            information: "Types of stitches\n\nThreading a sewing machine\n\nSewing buttons, zips, hems and seams\n\nAlterations\n\nDesigning and sewing new garments  ",
            image: study2Image,
            price: "R1500"
        },
        {
            name: "Landscaping",
            description: "landscaping services",
            duration: "6 Months",
            date: '25 June 2025',
            information: "Indigenous and exotic plants and trees\n\nFixed structures (fountains, statues, benches, tables, built-in braai)\n\nBalancing of plants and trees in a garden\n\nAesthetics of plant shapes and colours\n\nGarden layout",
            image: study3Image,
            price: "R1500"
        },
        {
            name: "Life Skills",
            description: "Navigate life",
            duration: "6 Months",
            date: '25 June 2025',
            information: "Opening a bank account\n\nBasic labour law (know your rights)\n\nBasic reading and writing literacy\n\nBasic numeric literacy",
            image: study4Image,
            price: "R1500"
        }
    ]

    // Author :  gorhom Mo Gorhom
    // Link : https://gorhom.dev/react-native-bottom-sheet/
    const bottomSheetRef = React.useRef<BottomSheet>(null);

    const handleSheetChanges = React.useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const handleClosePress = () => bottomSheetRef.current?.close();
    const handleOpenPress = () => bottomSheetRef.current?.expand();

    const snapPoints = React.useMemo(() => ['84%', '85%'], []);

    // Author :  gorhom Mo Gorhom
    // Link : https://gorhom.dev/react-native-bottom-sheet/
    const renderBackdrop = React.useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}

            />
        ),
        []
    );


    function getData(nname: string, ddate: string, ddescription: string, iimage: any, iinformation: string, pprice : string) {

        setName(nname)
        setDate(ddate)
        setDescription(ddescription)
        setImage(iimage)
        setInformation(iinformation)
        setPrice(pprice)

        handleOpenPress();

    }
    return (

        <SafeAreaView>
            <GestureHandlerRootView style={{ backgroundColor: "white" }}>

                <View style={styles.page}>

                    <View style={styles.container}>

                        <FlatList
                            data={LongData}
                            renderItem={({ item }) =>

                                <CourseCard
                                    name={item.name}
                                    description={item.description}
                                    duration={item.duration}
                                    onPress={() => { getData(item.name, item.date, item.description, item.image, item.information, item.price) }}
                                image={item.image}
                                ></CourseCard>
                            }
                            keyExtractor={item => item.name}
                            contentContainerStyle={{ paddingHorizontal: 3 }}





                        />
                        <BottomSheet
                            ref={bottomSheetRef}
                            index={-1}
                            snapPoints={snapPoints}
                            enablePanDownToClose={true}
                            backdropComponent={renderBackdrop}
                            onChange={handleSheetChanges}>
                            <BottomSheetView >

                                <Details
                                    name={name}
                                    description={description}
                                    image={image}
                                    information={information}
                                    date={date}
                                    price= {price}
                                ></Details>

                            </BottomSheetView>
                        </BottomSheet>
                    </View>



                </View>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 10
    },


    page: {
        height: '90%',
        display: 'flex',
        alignItems: "center"

    },

});

