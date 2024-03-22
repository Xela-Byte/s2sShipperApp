import {NavigationProp, RouteProp} from '@react-navigation/native';

export type ChatStackParamList = {
  ChatScreen: undefined;
  MessageScreen: {
    name: string;
  };
  ShipperProfile: undefined;
};

export type ChatScreenProps = {
  navigation: NavigationProp<ChatStackParamList, 'ChatScreen'>;
};

export type MessageScreenProps = {
  navigation: NavigationProp<ChatStackParamList, 'MessageScreen'>;
  route: RouteProp<ChatStackParamList, 'MessageScreen'>;
};

export type ShipperProfileProps = {
  navigation: NavigationProp<ChatStackParamList, 'ShipperProfile'>;
};
