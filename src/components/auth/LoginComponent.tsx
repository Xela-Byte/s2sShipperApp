import {useForm} from 'react-hook-form';
import {View, Text} from 'react-native';
import CustomInput from '../input/CustomInput';
import {authStyle} from '../../styles/AuthStyle';
import GradientButton from '../button/GradientButton';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import * as Animatable from 'react-native-animatable';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils/data/Regex';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../stateManagement/store';
import {setNewUser} from '../../stateManagement/features/auth/authSlice';

type Props = {};

type FormValues = {
  email: string;
  password: string;
};

const LoginComponent = (props: Props) => {
  const {control, handleSubmit, watch} = useForm<FormValues>();
  const dispatch = useDispatch<AppDispatch>();

  const onSignIn = (data: FormValues) => {
    dispatch(setNewUser());
  };

  const email = watch('email');
  const password = watch('password');

  const isValid = email && password;

  return (
    <Animatable.View
      animation={'slideInRight'}
      duration={500}
      style={authStyle.loginContainer}>
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

      <View style={authStyle.loginRecover}>
        <CustomText fontType="medium" fontSize={fontSize.primary}>
          Forgot password?
        </CustomText>
        <CustomText
          fontSize={fontSize.primary}
          fontType="semiBold"
          color={appColors.textPrimary}>
          Recover
        </CustomText>
      </View>

      <GradientButton
        title="Sign in"
        customViewStyle={{
          marginTop: sizeBlock.getHeightSize(70),
        }}
        auth
        onPress={handleSubmit(onSignIn)}
        disabled={!isValid}
      />
    </Animatable.View>
  );
};

export default LoginComponent;
