import {DrawerNavigationProp} from '@react-navigation/drawer/lib/typescript/src/types';
import {RouteProp} from '@react-navigation/native';

export type DrawerStackParamList = {
  AccountScreen: undefined;
  HomePage: undefined;
  AddLocationScreen: undefined;
  PostOrderScreen: undefined;
  NotificationScreen: undefined;
  CheckoutScreen: {
    offerType: string;
  };
  Wallet: {
    screen: 'ReferScreen';
  };
};

export type AccountScreenProps = {
  navigation: DrawerNavigationProp<DrawerStackParamList, 'AccountScreen'>;
};

export type HomeScreenProps = {
  navigation: DrawerNavigationProp<DrawerStackParamList, 'HomePage'>;
};

export type AddLocationScreenProps = {
  navigation: DrawerNavigationProp<DrawerStackParamList, 'AddLocationScreen'>;
};

export type PostOrderScreenProps = {
  navigation: DrawerNavigationProp<DrawerStackParamList, 'PostOrderScreen'>;
};

export type CheckoutScreenProps = {
  navigation: DrawerNavigationProp<DrawerStackParamList, 'CheckoutScreen'>;
  route: RouteProp<DrawerStackParamList, 'CheckoutScreen'>;
};

export type WalletProps = {
  navigation: DrawerNavigationProp<DrawerStackParamList, 'Wallet'>;
};

export type NotificationScreenProps = {
  navigation: DrawerNavigationProp<DrawerStackParamList, 'NotificationScreen'>;
};
