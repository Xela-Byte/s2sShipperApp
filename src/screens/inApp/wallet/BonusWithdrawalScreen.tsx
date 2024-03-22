import {View, Text, SafeAreaView} from 'react-native';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {bonusWithdrawalStyle} from '../../../styles/BonusWithdrawalStyle';
import CustomText from '../../../components/text/CustomText';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../components/input/CustomInput';
import GradientButton from '../../../components/button/GradientButton';
import {postOrderStyle} from '../../../styles/PostOrderStyle';
import GradientShadow from '../../../components/background/GradientShadow';
import {BonusWithdrawalScreenProps} from '../../../types/navigation/WalletNavigationType';

type Props = {};

type FormValues = {
  amount: string;
};

const BonusWithdrawalScreen = ({navigation}: BonusWithdrawalScreenProps) => {
  const {control} = useForm<FormValues>();
  return (
    <SafeAreaView style={bonusWithdrawalStyle.container}>
      <HeaderComponent title="Bonus Withdrawal" onPress={navigation.goBack} />
      <View style={bonusWithdrawalStyle.content}>
        <View style={bonusWithdrawalStyle.balanceContainer}>
          <CustomText fontType="medium" color={appColors.white}>
            Bonus Balance
          </CustomText>
          <CustomText
            fontType="semiBold"
            fontSize={fontSize.medium}
            color={appColors.white}>
            $40.00
          </CustomText>
        </View>
        <CustomInput
          customStyle={{marginTop: sizeBlock.getHeightSize(50)}}
          control={control}
          name="amount"
          placeholder="Amount"
        />

        <GradientButton
          customViewStyle={{marginTop: sizeBlock.getHeightSize(50)}}
          title="Withdraw"
          onPress={() => {}}
          showArrow
        />
      </View>
      <GradientShadow
        customViewStyle={bonusWithdrawalStyle.highlight}
        scale={2.5}
      />
    </SafeAreaView>
  );
};

export default BonusWithdrawalScreen;
