import React from 'react';
import { View } from 'react-native';
import { Box, Text, Input, Button, Image, Pressable } from 'native-base';
import { NavigationContainerProps } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

type LoginForm = {
  email: string;
  password: string;
};

const LoginScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const validateEmail = (value: string) => {
    // Regexfor a simple email format validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(value.trim())) {
      return 'Please enter a valid email address';
    }

    return true;
  };
  const validatePassword = (value: string) => {
    if (!value) {
      return 'Password is required';
    }

    return true;
  };

  const onSubmit = (data: LoginForm) => {
    // supposed to handle signup logic here but we dont have API request to create a new user 
    // instead we take the user home
    navigation.navigate('Home')
  };

  return (
    <View>
        <Image source={{
          uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
        }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" display='flex' alignSelf='center'/>
      
      <Text textAlign={'center'} fontWeight={600} fontSize={'2xl'} m='6'>Login</Text>
      <Box>
        <Controller 
          control={control}
          render={({ field }) => (
            <Input
              m='4'
              placeholder="Email"
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="email"
          rules={{ validate: validateEmail }}
        />
        {errors.email && <Text color="red.500">{errors.email.message}</Text>}
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              m='4'
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="password"
          rules={{ validate: validatePassword }}
        />
        <Text>
          {errors.password && (
            <Text color="red.500">{errors.password.message}</Text>
          )}
        </Text>
        <Button
          onPress={handleSubmit(onSubmit)}
          rounded="md" bg="primary.400" alignSelf="center" m="10" px="6" py="2"
          _hover={{
            bg: "primary.700"
          }}
        >
          <Text>Go!</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate('Signup')}
          variant="link"
          colorScheme="blue"
        >
          Don't Have an Account? Sign Up
        </Button>
        <Button
          onPress={() => navigation.navigate('Home')}
          variant="link"
          colorScheme="blue"
        >
          Skip
        </Button>
      </Box>
    </View>
  );
};

export default LoginScreen;