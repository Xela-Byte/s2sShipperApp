import {Pressable, ScrollView, StatusBar, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import EyeIcon from 'react-native-vector-icons/Entypo';
import HandshakeIcon from '../../../assets/svgs/HandshakeIcon';
import MenuIcon from '../../../assets/svgs/MenuIcon';
import PlusIcon from '../../../assets/svgs/PlusIcon';
import CustomText from '../../../components/text/CustomText';
import TransactionComponent from '../../../components/wallet/TransactionComponent';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {walletStyle} from '../../../styles/WalletStyle';
import {WalletProps} from '../../../types/navigation/SideNavigationType';

const WalletScreen = ({navigation}: WalletProps) => {
  return (
    <View style={walletStyle.container}>
      <ScrollView>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />
        <View style={walletStyle.headerWrapper}>
          <FastImage
            source={require('../../../assets/images/HomeBG.jpg')}
            style={walletStyle.bgImage}
            resizeMode="cover"
          />

          <View style={walletStyle.headerContainer}>
            <View style={walletStyle.headerContent}>
              <FastImage
                source={require('../../../assets/images/s2sWhite.png')}
                style={walletStyle.logo}
                resizeMode="contain"
              />
              <MenuIcon
                style={{
                  marginTop: sizeBlock.getHeightSize(5),
                }}
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            </View>
            <View style={walletStyle.profileContent}>
              <View>
                <View style={walletStyle.greeting}>
                  <HandshakeIcon />
                  <CustomText
                    fontType="semiBold"
                    fontSize={fontSize.primary}
                    color={appColors.white}>
                    Welcome
                  </CustomText>
                </View>
                <CustomText
                  fontSize={fontSize.primary - 2}
                  color={appColors.white}>
                  Xela Oladipupo
                </CustomText>
              </View>
              <FastImage
                source={require('../../../assets/images/avatar.jpg')}
                style={walletStyle.avatar}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={walletStyle.balanceHeader}>
            <CustomText
              fontSize={fontSize.small + 2}
              fontType="medium"
              color={appColors.white}>
              Wallet Balance
            </CustomText>

            <EyeIcon
              name={'eye' || 'eye-with-line'}
              size={fontSize.medium}
              color={appColors.white}
            />
          </View>

          <View style={walletStyle.balanceUtility}>
            <View>
              <CustomText
                color={appColors.white}
                fontType="medium"
                fontSize={fontSize.medium}>
                $400.23
              </CustomText>
              <CustomText
                color={appColors.white}
                fontSize={fontSize.primary - 2}>
                & Referral Reward
              </CustomText>
            </View>
            <View style={walletStyle.topupBalance}>
              <CustomText fontType="medium" color={appColors.onGradientPrimary}>
                Top up
              </CustomText>
              <PlusIcon width={20} />
            </View>
          </View>
        </View>

        <View style={walletStyle.content}>
          <Pressable
            style={walletStyle.referContent}
            onPress={() => {
              navigation.navigate('Wallet', {
                screen: 'ReferScreen',
              });
            }}>
            <FastImage
              source={require('../../../assets/images/giftIcon.png')}
              style={walletStyle.giftIcon}
              resizeMode="contain"
            />
            <View style={walletStyle.referContentText}>
              <CustomText fontType="medium" fontSize={fontSize.primary - 2}>
                Refer and Earn
              </CustomText>
              <CustomText fontSize={fontSize.primary - 4}>
                Refer a friend to use this app and rewarded for each referral.
              </CustomText>
            </View>
            <FastImage
              source={require('../../../assets/images/banner.png')}
              style={walletStyle.banner}
              resizeMode="contain"
            />
          </Pressable>

          <View style={walletStyle.recentTrackingText}>
            <CustomText fontSize={fontSize.primary} color={appColors.gray}>
              Recent Transactions
            </CustomText>
            <CustomText
              fontSize={fontSize.primary - 2}
              fontType="medium"
              color={appColors.textPrimary}>
              See all
            </CustomText>
          </View>

          <TransactionComponent transactType="sent" date="01 Nov" />
          <TransactionComponent transactType="received" date="08 Nov" />
        </View>
      </ScrollView>
    </View>
  );
};

export default WalletScreen;
