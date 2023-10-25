import React from 'react';
import { View } from 'react-native';
import { Box, Text, Input, Button } from 'native-base';
import { NavigationContainerProps } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

type SignupFormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>();

  const validateFullName = (value: string) => {
    const fullNameRegex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
    return fullNameRegex.test(value.trim()) || 'Please enter a valid full name';
  };

  const validateEmail = (value: string) => {
    // Regex for a simple email format validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailRegex.test(value.trim())) {
      return 'Please enter a valid email address';
    }
  
    return true;
  };
  

  const validatePassword = (value: string) => {
    //regex patterns for each requirement
    const hasUppercase = /[A-Z]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-/\\=-]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasAcceptableLength = value.length >= 6; 
  
    // Checkpoint
    const isStrongPassword =
      hasUppercase && hasSpecialCharacter && hasNumber && hasAcceptableLength;
  
    if (!isStrongPassword) {
      return 'Invalid Password';
    }
  
    return true;
  };
  

  const confirmMatchPassword = (value: string) => {
    const password = watch('password');
    return value === password || 'Passwords do not match';
  };

  const onSubmit = (data: SignupFormData) => {
    // supposed to handle signup logic here but we dont have API request to create a new user 
    // instead we take the user home
    navigation.navigate('Home')
  };

  return (
    <View>
      <Text mx='4' my="2" textAlign={'center'} fontSize={25}>Create An Account</Text>
      <Box>
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              m='4'
              borderWidth={2}
              fontSize={16}
              placeholder="Full Name"
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="fullName"
          rules={{ validate: validateFullName }}
        />
        {errors.fullName && (
          <Text color="red.500">{errors.fullName.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field }) => (
            <Input
              m='4'
              fontSize={16}
              borderWidth={2}
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
              borderWidth={2}
              fontSize={16}
              placeholder="Create Password"
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

        <Controller
          control={control}
          render={({ field }) => (
            <Input
            m='4'
            fontSize={16}
            borderWidth={2}
            placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="confirmPassword"
          rules={{ validate: confirmMatchPassword }}
        />
        {errors.confirmPassword && (
          <Text color="red.500">{errors.confirmPassword.message}</Text>
        )}

        <Button m='4' width={40} alignSelf={'center'} onPress={handleSubmit(onSubmit)} _hover={{bg: 'blue.700', color: 'white'}} _pressed={{bg: 'green.500'}}>
          Done!
        </Button>
        <Button
          onPress={() => navigation.navigate('Login')}
          variant="link"
          colorScheme="blue"
        >
          Have an Account? Log In
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

export default SignupScreen;
