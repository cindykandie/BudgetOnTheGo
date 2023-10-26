import React from 'react';
import { View } from 'react-native';
import { Box, Text, Button, Center, Pressable, Image } from 'native-base';
import { NavigationContainerProps } from '@react-navigation/native';

const AuthScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
  return (
    <View>
        <Text fontSize="xl" textAlign="center" my="4">Authentication</Text>
        <Image source={{
          uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
        }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" display='flex' alignSelf='center'/>
      <Box>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          rounded="md" bg="primary.400" alignSelf="flex-start" m="10" px="6" py="2"
        >
          <Text>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Signup')}
          rounded="md" bg="primary.400" alignSelf="flex-end" m="10" px="6" py="2"
        >
          <Text>Sign Up</Text>
        </Pressable>
      </Box>
    </View>
  );
};

export default AuthScreen;

