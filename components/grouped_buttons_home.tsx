import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type GroupedButtonsProps = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;  // Function type to update selectedOption
};

const GroupedButtonsHome: React.FC<GroupedButtonsProps> = ({ selectedOption, setSelectedOption }) => {
   
 

  const handlePress = (option : string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      {['About', 'Location', 'Contact'].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selectedOption === option && styles.buttonSelected,
          ]}
          onPress={() => handlePress(option)}
        >
          <Text style={selectedOption === option  ? styles.buttonText : styles.buttonText2}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#000',
    borderWidth: 3,
    marginHorizontal: 5,
    color: 'black',
    minWidth: 100,
    alignItems: 'center'
  },
  buttonSelected: {
    backgroundColor: '#000',
  },
  buttonText: {
    color: 'white',
  },
  buttonText2: {
    color: '#000',
  }
});

export default GroupedButtonsHome;