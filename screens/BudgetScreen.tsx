// BudgetScreen.tsx
import React from 'react';
import { View } from 'react-native';
import { Box, Text, Button } from 'native-base';
import { NavigationContainerProps } from '@react-navigation/native';

const BudgetScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Budget Overview</Text>
      <Box>
        {/* Your budget-related components here */}
      </Box>
      <Button onPress={() => navigation.navigate('Home')}>
        Back to Home
      </Button>
    </View>
  );
};

export default BudgetScreen;

