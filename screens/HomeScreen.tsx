import React from 'react';
import { View } from 'react-native';
import { Box, Text, Image } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text alignSelf={'center'} fontSize={23} textAlign={'center'} px='10'>My Money Buddy, Budget On The Go!</Text>
      <Box>
        <Box py='20px' borderBottomWidth={2}>
        <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
          <Image
            source={require('../assets/budget.png')}
            alt="Budget"
            size="200" 
            alignSelf={'center'}
          />
          <Text bg={'blue.400'} mx={'40px'} borderRadius={'10px'} py={'10px'} color={'white'} textAlign={'center'} fontSize={20}>Budget AnyTime. AnyWhere</Text>
        
        </TouchableOpacity>
        </Box>

        <TouchableOpacity  onPress={() => navigation.navigate('TrackExpense')} >
          <Image
            source={require('../assets/track1.png')} 
            alt="Track Expense"
            size="200" 
            alignSelf={'center'}
          />
          <Text  bg={'blue.400'} my={'10px'} mx={'40px'} borderRadius={'10px'} py={'10px'} color={'white'} textAlign={'center'} fontSize={20}>Track your Expenses</Text>
        </TouchableOpacity>
      </Box>
    </View>
  );
};

export default HomeScreen;
