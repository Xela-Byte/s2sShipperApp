import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {VerifyScreenProps} from '../../types/navigation/AuthNavigationType';
import {verifyStyle} from '../../styles/VerifyStyle';
import CustomText from '../../components/text/CustomText';
import {fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {useForm} from 'react-hook-form';
import CustomInput from '../../components/input/CustomInput';
import GradientButton from '../../components/button/GradientButton';
import OutlinedButton from '../../components/button/OutlinedButton';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../stateManagement/store';
import {setNewUser} from '../../stateManagement/features/auth/authSlice';

type FormValues = {
  verificationCode: number;
};

const VerifyScreen = ({navigation, route}: VerifyScreenProps) => {
  const {params} = route;
  const {email} = params;
  const {control, handleSubmit, watch} = useForm<FormValues>();
  const dispatch = useDispatch<AppDispatch>();

  const onVerify = (data: FormValues) => {
    dispatch(setNewUser());
  };
  return (
    <SafeAreaView style={verifyStyle.container}>
      <CustomText
        fontSize={fontSize.medium}
        fontType="medium"
        customStyle={{textAlign: 'center'}}>
        Verify your email
      </CustomText>
      <CustomText
        customStyle={{
          textAlign: 'center',
          marginTop: sizeBlock.getHeightSize(20),
        }}
        fontSize={fontSize.primary}>
        Please enter the 6 digit code that was sent to umo********@gmail.com
      </CustomText>

      <CustomInput
        iconName="mail"
        control={control}
        name="verificationCode"
        placeholder="Verification Code"
        customStyle={{
          marginTop: sizeBlock.getHeightSize(50),
        }}
        inputProps={{
          keyboardType: 'numeric',
          maxLength: 6,
        }}
        rules={{
          required: 'Please input a verification code',
        }}
      />

      <GradientButton
        title="Verify email"
        onPress={handleSubmit(onVerify)}
        customViewStyle={{
          marginTop: sizeBlock.getHeightSize(30),
        }}
      />

      <OutlinedButton
        title="Resend code"
        onPress={() => {}}
        customViewStyle={{
          marginTop: sizeBlock.getHeightSize(30),
        }}
      />
    </SafeAreaView>
  );
};

export default VerifyScreen;
