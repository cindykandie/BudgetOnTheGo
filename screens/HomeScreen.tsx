import { Box } from 'native-base';
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>OverView</Text>
      <Box>Budget On The Go</Box>
      <TextInput
        
        placeholder="Enter Amount"
      />
      <Button title="Add Expense" />
      {/* Add buttons for other functionalities */}
    </View>
  );
}
