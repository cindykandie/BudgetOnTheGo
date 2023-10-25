// AuthScreen.tsx
import React from 'react';
import { View } from 'react-native';
import { Box, Text, Button } from 'native-base';
import { NavigationContainerProps } from '@react-navigation/native';

const AuthScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Authentication</Text>
      <Box>
        <Button
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Button>
        <Button
          onPress={() => navigation.navigate('Signup')}
        >
          Signup
        </Button>
      </Box>
    </View>
  );
};

export default AuthScreen;

// LoginScreen.tsx
// import React from 'react';
// import { View } from 'react-native';
// import { Box, Text, Input, Button } from 'native-base';
// import { NavigationContainerProps } from '@react-navigation/native';

// const LoginScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Login</Text>
//       <Box>
//         {/* Your login components here (e.g., email, password input) */}
//         <Input placeholder="Email" />
//         <Input placeholder="Password" />
//         <Button onPress={() => /* Add login logic here */}>
//           Login
//         </Button>
//       </Box>
//     </View>
//   );
// };

// export default LoginScreen;

// // SignupScreen.tsx
// import React from 'react';
// import { View } from 'react-native';
// import { Box, Text, Input, Button } from 'native-base';
// import { NavigationContainerProps } from '@react-navigation/native';

// const SignupScreen: React.FC<NavigationContainerProps> = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Signup</Text>
//       <Box>
//         {/* Your signup components here (e.g., name, email, password input) */}
//         <Input placeholder="Name" />
//         <Input placeholder="Email" />
//         <Input placeholder="Password" />
//         <Button onPress={() => /* Add signup logic here */}>
//           Signup
//         </Button>
//       </Box>
//     </View>
//   );
// };

// export default SignupScreen;
