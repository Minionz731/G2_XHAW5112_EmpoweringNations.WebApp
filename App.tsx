import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from '@react-native-vector-icons/ionicons';
import HomeScreen from './screens/home_screen';
import TotalsScreen from './screens/totals_screen';
import CoursesScreen from './screens/courses_screen';
import Ionicons from '@expo/vector-icons/Ionicons';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Courses"
          component={CoursesScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Courses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="library" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Totals"
          component={TotalsScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Totals",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calculator" color={color} size={size} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
