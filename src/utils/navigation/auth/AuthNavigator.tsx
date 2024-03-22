import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {AuthStackParamList} from '../../../types/navigation/AuthNavigationType';
import OnboardingScreen from '../../../screens/auth/OnboardingScreen';
import AuthScreen from '../../../screens/auth/AuthScreen';
import VerifyScreen from '../../../screens/auth/VerifyScreen';
import {useSelector} from 'react-redux';
import {selectFreshInstall} from '../../../stateManagement/features/auth/authSlice';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  const freshInstall = useSelector(selectFreshInstall);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={freshInstall ? 'OnboardingScreen' : 'AuthScreen'}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
