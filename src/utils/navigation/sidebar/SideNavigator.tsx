import {createDrawerNavigator} from '@react-navigation/drawer';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../../../components/sidebar/CustomDrawer';
import AccountScreen from '../../../screens/inApp/profile/AccountScreen';
import AddLocationScreen from '../../../screens/inApp/profile/AddLocationScreen';
import {appColors, fontFamily, fontSize} from '../../../styles/UniversalStyle';
import {DrawerStackParamList} from '../../../types/navigation/SideNavigationType';
import BottomTabNavigator from '../bottomTab/BottomTabNavigator';
import PostOrderScreen from '../../../screens/inApp/service/PostOrderScreen';
import CheckoutScreen from '../../../screens/inApp/service/CheckoutScreen';
import NotificationScreen from '../../../screens/inApp/home/NotificationScreen';

const DrawerStack = () => {
  const Drawer = createDrawerNavigator<DrawerStackParamList>();

  const setIconColor = (focused: boolean) => {
    return focused ? appColors.onGradientPrimary : appColors.gray;
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={() => ({
        headerShown: false,
        drawerActiveTintColor: appColors.onGradientPrimary,
        drawerLabelStyle: {
          width: '100%',
          marginLeft: -20,
          fontFamily: fontFamily.medium,
          fontSize: fontSize.small + 1,
        },
        swipeEdgeWidth: 0,
      })}>
      <Drawer.Screen
        name={'HomePage'}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused}) => (
            <PersonIcon
              name="person-circle-outline"
              size={27}
              color={setIconColor(focused)}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={'AccountScreen'}
        component={AccountScreen}
        options={{
          title: 'Account',
          drawerIcon: ({focused}) => (
            <PersonIcon
              name="person-circle-outline"
              size={27}
              color={setIconColor(focused)}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const AppStack = createStackNavigator();

const SideNavigator = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Drawer"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AppStack.Screen name="Drawer" component={DrawerStack} />
      <AppStack.Screen name="AddLocationScreen" component={AddLocationScreen} />
      <AppStack.Screen name="PostOrderScreen" component={PostOrderScreen} />
      <AppStack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <AppStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </AppStack.Navigator>
  );
};

export default SideNavigator;
