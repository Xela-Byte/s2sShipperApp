import {useForm} from 'react-hook-form';
import {View, Text} from 'react-native';
import CustomInput from '../input/CustomInput';
import {authStyle} from '../../styles/AuthStyle';
import GradientButton from '../button/GradientButton';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import * as Animatable from 'react-native-animatable';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils/data/Regex';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native';
import OutlinedButton from '../button/OutlinedButton';
import {AuthScreenProps} from '../../types/navigation/AuthNavigationType';

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterComponent = ({navigation}: AuthScreenProps) => {
  const {control, handleSubmit, watch} = useForm<FormValues>();

  const onSignIn = (data: FormValues) => {
    navigation.navigate('VerifyScreen', {
      email: data.email,
    });
  };

  const name = watch('name');
  const email = watch('email');
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const isValid = name && email && password && confirmPassword;

  return (
    <Animatable.View
      duration={500}
      animation={'slideInLeft'}
      style={authStyle.registerContainer}>
      <FastImage
        source={require('../../assets/images/s2s.png')}
        style={authStyle.logo}
        resizeMode="contain"
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: sizeBlock.getHeightSize(20)}}
        style={{
          height: screenHeight * 0.67,
        }}>
        <CustomInput
          iconName="user"
          control={control}
          name="name"
          placeholder="Full Name"
          rules={{
            required: 'Please enter name',
          }}
        />
        <CustomInput
          iconName="mail"
          control={control}
          name="email"
          placeholder="Email Address"
          rules={{
            required: 'Please enter email',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          iconName="dots-three-horizontal"
          control={control}
          name="password"
          placeholder="Password"
          password
          rules={{
            required: 'Please enter password',
            pattern: {value: PASSWORD_REGEX, message: 'Password is invalid'},
          }}
        />

        <CustomInput
          iconName="dots-three-horizontal"
          control={control}
          name="confirmPassword"
          placeholder="Confirm Password"
          password
          rules={{
            required: 'Confirm password',
            validate: (value: string) =>
              value === password || "Password does't match",
          }}
        />

        <GradientButton
          title="Sign up"
          customViewStyle={{
            marginTop: sizeBlock.getHeightSize(35),
          }}
          auth
          onPress={handleSubmit(onSignIn)}
          disabled={!isValid}
        />

        <View style={authStyle.seperator}>
          <CustomText
            customStyle={{
              position: 'absolute',
              top: -sizeBlock.getHeightSize(10),
              left: '42%',
              backgroundColor: appColors.lightGrey,
              paddingHorizontal: sizeBlock.getWidthSize(10),
            }}
            color={appColors.gray}>
            OR
          </CustomText>
        </View>

        <OutlinedButton
          title="Sign up via Google"
          onPress={() => {}}
          iconName="google"
        />
        <OutlinedButton
          iconName="facebook"
          title="Sign up via Facebook"
          onPress={() => {}}
          customViewStyle={{
            marginTop: sizeBlock.getHeightSize(35),
          }}
        />

        <CustomText
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(20),
          }}
          fontSize={fontSize.primary - 2}>
          By using S2S App, you agree to our
          <CustomText
            fontType="bold"
            color={appColors.textPrimary}
            fontSize={fontSize.primary - 2}>
            {' '}
            Terms
          </CustomText>{' '}
          and{' '}
          <CustomText
            fontType="bold"
            color={appColors.textPrimary}
            fontSize={fontSize.primary - 2}>
            {' '}
            Privacy Policy
          </CustomText>
          . This includes signing in, registering or clicking “Sign in via”
          Google, Facebook button.
        </CustomText>
      </ScrollView>
    </Animatable.View>
  );
};

export default RegisterComponent;
