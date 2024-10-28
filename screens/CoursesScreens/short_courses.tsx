import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import CourseCard from '../../components/card_course';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Details from './details_screen';


export default function Short() {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState(require('../../images/study1.jpg'));
    const [information, setInformation] = React.useState('');
    const [date, setDate] = React.useState('');
    const [price, setPrice] = React.useState('');


    const study1Image = require('../../images/study6.png');
    const study2Image = require('../../images/study7.png');
    const study3Image = require('../../images/study8.png');





    const shortData = [
        {
            name: "Child minding",
            description: "Baby care",
            duration: "6 Weeks",
            date: '25 June 2025',
            information: "Birth to six-month old baby needs\n\nSeven-month to one year old needs\n\nToddler needs\n\nEducational toys ",
            image: study1Image,
            price: "R750"
        },
        {
            name: "Cooking",
            description: "Cook nutritious meals",
            duration: "6 Weeks",
            date: '25 June 2025',
            information: "Nutritional requirements for a healthy body\n\nTypes of protein, carbohydrates and vegetables\n\nPlanning meals\n\nPreparation and cooking of meals",
            image: study2Image,
            price: "R750"
        },
        {
            name: "Garden maintenence",
            description: "Basic gardening ",
            duration: "6 Weeks",
            date: '25 December 2025',
            information: "Water restrictions and the watering requirements of indigenous and exotic plants\n\nPruning and propagation of plants\n\nPlanting techniques for different plant types",
            image: study3Image,
            price: "R750"
        },
    ];

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
                            data={shortData}
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

        alignItems: "center"
    },

});

