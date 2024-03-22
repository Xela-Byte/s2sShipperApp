import {View, Text, SafeAreaView, StatusBar, Pressable} from 'react-native';
import {authStyle} from '../../styles/AuthStyle';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {
  appColors,
  borderRadius,
  screenWidth,
} from '../../styles/UniversalStyle';
import CustomText from '../../components/text/CustomText';
import {useState} from 'react';
import LoginComponent from '../../components/auth/LoginComponent';
import RegisterComponent from '../../components/auth/RegisterComponent';
import {AuthScreenProps} from '../../types/navigation/AuthNavigationType';

const AuthScreen = ({navigation}: AuthScreenProps) => {
  const [activeTab, setActiveTab] = useState<'Login' | 'Register'>('Login');

  return (
    <SafeAreaView style={authStyle.container}>
      <StatusBar backgroundColor={appColors.lightGrey} />
      <View style={authStyle.tabContainer}>
        <Animatable.View
          transition={'marginLeft'}
          duration={500}
          style={[
            authStyle.tabSlider,
            {
              marginLeft:
                activeTab === 'Register' ? (screenWidth * 0.7) / 2 : 0,
            },
          ]}>
          <LinearGradient
            colors={[appColors.onGradientPrimary, appColors.grey]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0, 1]}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: borderRadius.full,
            }}
          />
        </Animatable.View>
        <Pressable
          style={authStyle.tabContent}
          onPress={() => {
            setActiveTab('Login');
          }}>
          <CustomText
            color={
              activeTab === 'Login' ? appColors.white : appColors.textPrimary
            }>
            Sign In
          </CustomText>
        </Pressable>
        <Pressable
          style={authStyle.tabContent}
          onPress={() => {
            setActiveTab('Register');
          }}>
          <CustomText
            color={
              activeTab === 'Register' ? appColors.white : appColors.textPrimary
            }>
            Register
          </CustomText>
        </Pressable>
      </View>

      {activeTab === 'Login' && <LoginComponent />}
      {activeTab === 'Register' && (
        <RegisterComponent navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

export default AuthScreen;
