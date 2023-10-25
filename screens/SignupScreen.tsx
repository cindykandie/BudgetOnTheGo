import React from 'react';
import { View } from 'react-native';
import { Box, Text, Input, Button } from 'native-base';
import { NavigationContainerProps } from '@react-navigation/native';

const SignupScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Create An Account</Text>
      <Box>
        {/* Your signup components here (e.g., name, email, password input) */}
        <Input placeholder="Full Name" />
        <Input placeholder="Email" />
        <Input placeholder="Create Password" />
        <Input placeholder="Confirm Password" />
        <Button>
          Done!
        </Button>
        <Button>
        Skip
        </Button>
      </Box>
    </View>
  );
};

export default SignupScreen;
