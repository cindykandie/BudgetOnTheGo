import React from 'react';
import { View } from 'react-native';
import { Box, Text, Input, Button } from 'native-base';
import { NavigationContainerProps } from '@react-navigation/native';

const LoginScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Box>
        {/* Your login components here (e.g., email, password input) */}
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button>
          Login
        </Button>
      </Box>
    </View>
  );
};

export default LoginScreen;

