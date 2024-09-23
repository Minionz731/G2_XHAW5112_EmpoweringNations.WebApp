
import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import GroupedButtonsHome from '../components/grouped_buttons_home';
import About from './HomeScreens/about';
import Contact from './HomeScreens/contact';
import Locations from './HomeScreens/locations';


export default function HomeScreen() {
    const [selectedOption, setSelectedOption] = React.useState('About');

    const renderContent = () => {
        switch (selectedOption) {
          case 'About':
            return <About />;
          case 'Location':
            return <Locations/>;
          case 'Contact':
            return <Contact />;
          default:
            return <About />; // Fallback content
        }
      };

    return (
        <SafeAreaView>
            <View>
                <GroupedButtonsHome
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption} ></GroupedButtonsHome>
                {
                  renderContent()
                }
            </View>
        </SafeAreaView>

    );
}