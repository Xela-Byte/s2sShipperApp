import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WalletStackParamList} from '../../../types/navigation/WalletNavigationType';
import WalletScreen from '../../../screens/inApp/wallet/WalletScreen';
import ReferScreen from '../../../screens/inApp/wallet/ReferScreen';
import ReferDashboardScreen from '../../../screens/inApp/wallet/ReferDashboardScreen';
import BonusWithdrawalScreen from '../../../screens/inApp/wallet/BonusWithdrawalScreen';

const WalletStack = () => {
  const Stack = createNativeStackNavigator<WalletStackParamList>();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'WalletScreen'}>
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name="ReferScreen" component={ReferScreen} />
        <Stack.Screen
          name="ReferDashboardScreen"
          component={ReferDashboardScreen}
        />
        <Stack.Screen
          name="BonusWithdrawalScreen"
          component={BonusWithdrawalScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default WalletStack;
