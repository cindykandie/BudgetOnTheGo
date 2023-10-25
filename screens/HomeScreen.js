import { Box } from 'native-base';
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Budget On-The-Go</Text>
      <Box>Hello world</Box>
      <TextInput
        
        placeholder="Enter Amount"
      />
      <Button title="Add Expense" />
      {/* Add buttons for other functionalities */}
    </View>
  );
}
