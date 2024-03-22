import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './auth/AuthNavigator';
import InAppNavigator from './inApp/InAppNavigator';
import {useSelector} from 'react-redux';
import {selectNewUser} from '../../stateManagement/features/auth/authSlice';

const Navigator = () => {
  const isNewUser = useSelector(selectNewUser);
  return (
    <NavigationContainer>
      {isNewUser ? <AuthNavigator /> : <InAppNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
