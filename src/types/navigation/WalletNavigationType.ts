import {NavigationProp} from '@react-navigation/native';

export type WalletStackParamList = {
  WalletScreen: undefined;
  ReferScreen: undefined;
  ReferDashboardScreen: undefined;
  BonusWithdrawalScreen: undefined;
};

export type WalletScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'WalletScreen'>;
};

export type ReferScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'ReferScreen'>;
};

export type ReferDashboardScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'ReferDashboardScreen'>;
};

export type BonusWithdrawalScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'BonusWithdrawalScreen'>;
};
