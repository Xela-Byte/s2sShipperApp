import {NavigationProp, RouteProp} from '@react-navigation/native';

export type AuthStackParamList = {
  OnboardingScreen: undefined;
  AuthScreen: undefined;
  VerifyScreen: {
    email: string;
  };
};

export type OnboardingScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'OnboardingScreen'>;
};

export type AuthScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'AuthScreen'>;
};

export type VerifyScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'VerifyScreen'>;
  route: RouteProp<AuthStackParamList, 'VerifyScreen'>;
};
