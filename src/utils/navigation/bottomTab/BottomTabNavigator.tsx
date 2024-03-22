import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabComponent from '../../../components/bottomTab/BottomTabComponent';
import ChatScreen from '../../../screens/inApp/chat/ChatScreen';
import HomeScreen from '../../../screens/inApp/home/HomeScreen';
import ProfileScreen from '../../../screens/inApp/profile/ProfileScreen';
import WalletStack from '../inApp/WalletStack';
import ChatStack from '../inApp/ChatStack';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBar={props => <BottomTabComponent {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Wallet" component={WalletStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
