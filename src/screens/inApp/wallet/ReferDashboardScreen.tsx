import {SafeAreaView, ScrollView, View} from 'react-native';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {ReferDashboardScreenProps} from '../../../types/navigation/WalletNavigationType';
import {referDashboardStyle} from '../../../styles/ReferDashboardStyle';
import CustomText from '../../../components/text/CustomText';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import FilterIcon from '../../../assets/svgs/FilterIcon';
import ChartComponent from '../../../components/wallet/ChartComponent';
import PendingReferralComponent from '../../../components/wallet/PendingReferralComponent';

const ReferDashboardScreen = ({navigation}: ReferDashboardScreenProps) => {
  return (
    <SafeAreaView style={referDashboardStyle.container}>
      <HeaderComponent title="Referral Dashboard" onPress={navigation.goBack} />
      <ScrollView>
        <View style={referDashboardStyle.content}>
          <CustomText fontType="semiBold" fontSize={fontSize.primary}>
            Referral Status
          </CustomText>
          <View style={referDashboardStyle.filterHeader}>
            <CustomText color={appColors.gray} fontSize={fontSize.primary - 2}>
              Last month
            </CustomText>
            <FilterIcon />
          </View>
          <ChartComponent />
          <CustomText
            customStyle={{marginTop: sizeBlock.getHeightSize(20)}}
            fontType="semiBold"
            fontSize={fontSize.primary}>
            Pending Status
          </CustomText>
          <PendingReferralComponent />
          <PendingReferralComponent />
          <PendingReferralComponent />
          <PendingReferralComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReferDashboardScreen;
