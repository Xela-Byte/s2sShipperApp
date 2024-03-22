import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import {default as RightIcon} from 'react-native-vector-icons/AntDesign';
import EyeIcon from 'react-native-vector-icons/Entypo';
import CopyIcon from 'react-native-vector-icons/Ionicons';
import LinkedInIcon from '../../../assets/svgs/LinkedInIcon';
import ReferFacebookIcon from '../../../assets/svgs/ReferFacebookIcon';
import ReferFriendsIcon from '../../../assets/svgs/ReferFriendsIcon';
import WhatsAppIcon from '../../../assets/svgs/WhatsAppIcon';
import HeaderComponent from '../../../components/header/HeaderComponent';
import CustomText from '../../../components/text/CustomText';
import {referStyle} from '../../../styles/ReferStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {ReferScreenProps} from '../../../types/navigation/WalletNavigationType';
import WithdrawIcon from '../../../assets/svgs/WithdrawIcon';

const ReferScreen = ({navigation}: ReferScreenProps) => {
  return (
    <SafeAreaView style={referStyle.container}>
      <HeaderComponent onPress={navigation.goBack} title="Refer a friend" />
      <ScrollView>
        <View style={referStyle.content}>
          <View style={referStyle.balanceContainer}>
            <View style={referStyle.balanceHeader}>
              <CustomText fontType="medium" color={appColors.white}>
                Bonus Balance
              </CustomText>
              <EyeIcon
                name={'eye' || 'eye-with-line'}
                size={fontSize.medium}
                color={appColors.white}
              />
            </View>
            <View style={referStyle.balanceUtility}>
              <View>
                <CustomText
                  color={appColors.white}
                  fontType="medium"
                  fontSize={fontSize.medium}>
                  $400.23
                </CustomText>
              </View>
              <Pressable
                style={referStyle.topupBalance}
                onPress={() => {
                  navigation.navigate('BonusWithdrawalScreen');
                }}>
                <CustomText
                  fontType="medium"
                  color={appColors.onGradientPrimary}>
                  Withdraw
                </CustomText>
                <WithdrawIcon width={20} />
              </Pressable>
            </View>
          </View>
          <View style={referStyle.friendIcon}>
            <ReferFriendsIcon />
          </View>
          <View style={referStyle.description}>
            <CustomText fontType="semiBold" fontSize={fontSize.primary}>
              Refer and Earn
            </CustomText>
            <CustomText
              customStyle={{marginTop: sizeBlock.getHeightSize(10)}}
              color={appColors.gray}
              fontSize={fontSize.primary - 2}>
              As a way of showing appreciation in return for sharing this app to
              your friends, you’ll be gifted $5.50 per each referrals you get.
              The higher the referrals, the larger the bonus you get gifted
              with.
            </CustomText>

            <CustomText
              fontType="medium"
              customStyle={{marginTop: sizeBlock.getHeightSize(30)}}
              color={appColors.gray}
              fontSize={fontSize.primary}>
              Referral Link
            </CustomText>

            <View style={referStyle.referLinkContainer}>
              <CustomText fontSize={fontSize.primary}>
                https://s2s.com?referral=12345
              </CustomText>

              <CopyIcon
                name="copy"
                size={fontSize.medium}
                color={appColors.onGradientPrimary}
              />
            </View>

            <View style={referStyle.shareContainer}>
              <CustomText>Share via: </CustomText>
              <WhatsAppIcon />
              <ReferFacebookIcon />
              <LinkedInIcon />
            </View>

            <View style={referStyle.stepContainer}>
              <CustomText fontType="semiBold" fontSize={fontSize.primary}>
                Steps On How To Earn Bonuses
              </CustomText>

              <View style={referStyle.stepContent}>
                <CustomText fontSize={fontSize.primary - 2}>
                  Share your referral link to preferred contacts via the
                  provided social platforms.
                </CustomText>
              </View>
              <View style={referStyle.stepContent}>
                <CustomText fontSize={fontSize.primary - 2}>
                  On creating an account with the link for the first time, both
                  the referrer and referee stand a chance to earn T13.00 each.
                </CustomText>
              </View>
              <View style={referStyle.stepContent}>
                <CustomText fontSize={fontSize.primary - 2}>
                  You then get notified on the exact user that used your
                  referral code.
                </CustomText>
              </View>
            </View>

            <Pressable
              style={referStyle.recentTrackingText}
              onPress={() => {
                navigation.navigate('ReferDashboardScreen');
              }}>
              <CustomText fontType="semiBold" fontSize={fontSize.primary}>
                View referral dashboard
              </CustomText>
              <RightIcon
                name="right"
                color={appColors.black}
                size={fontSize.primary}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReferScreen;
