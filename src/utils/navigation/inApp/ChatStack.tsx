import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatStackParamList} from '../../../types/navigation/ChatNavigationType';
import ChatScreen from '../../../screens/inApp/chat/ChatScreen';
import MessageScreen from '../../../screens/inApp/chat/MessageScreen';
import ShipperProfile from '../../../screens/inApp/profile/ShipperProfile';

const ChatStack = () => {
  const Stack = createNativeStackNavigator<ChatStackParamList>();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'ChatScreen'}>
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="ShipperProfile" component={ShipperProfile} />
      </Stack.Navigator>
    </>
  );
};

export default ChatStack;
