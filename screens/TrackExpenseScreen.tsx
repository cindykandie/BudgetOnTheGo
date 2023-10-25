import React from 'react';
import { View } from 'react-native';
import { Box, Text, Button } from 'native-base';
import { NavigationContainerProps } from '@react-navigation/native';

const TrackExpenseScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Track Expense</Text>
      <Box>
        {/* expense tracking components here */}
      </Box>
      <Button onPress={() => navigation.navigate('Home')}>
        Back to Home
      </Button>
    </View>
  );
};

export default TrackExpenseScreen;
