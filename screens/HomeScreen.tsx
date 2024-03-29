import React from 'react';
import { View } from 'react-native';
import { Box, Text, Image } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text>OverView</Text>
      <Box>
        <Text>Budget On The Go</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
          <Image
            source={require('../assets/budget.png')}
            alt="Budget"
            size="20" 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TrackExpense')}>
          <Image
            source={require('../assets/budget.png')} 
            alt="Track Expense"
            size="20" 
          />
        </TouchableOpacity>
      </Box>
    </View>
  );
};

export default HomeScreen;
