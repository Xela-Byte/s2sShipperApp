import moment from 'moment';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import EditIcon from 'react-native-vector-icons/Entypo';
import HeaderComponent from '../../../components/header/HeaderComponent';
import CustomText from '../../../components/text/CustomText';
import {notificationStyle} from '../../../styles/NotificationStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {NotificationScreenProps} from '../../../types/navigation/SideNavigationType';
import TopupIcon from '../../../assets/svgs/TopupIcon';
import ReferralIcon from '../../../assets/svgs/ReferralIcon';
import {ScrollView} from 'react-native';
import OutlinedButton from '../../../components/button/OutlinedButton';

const NotificationScreen = ({navigation}: NotificationScreenProps) => {
  const todayDate = moment().format('D MMMM YYYY');

  return (
    <SafeAreaView style={notificationStyle.container}>
      <HeaderComponent title="Notifications" onPress={navigation.goBack} />
      <View style={notificationStyle.content}>
        <CustomText
          customStyle={{marginBottom: sizeBlock.getHeightSize(20)}}
          fontSize={fontSize.primary}
          color={appColors.gray}>
          {todayDate}
        </CustomText>

        <ScrollView>
          <View style={notificationStyle.notificationContainer}>
            <FastImage
              source={require('../../../assets/images/avatar.jpg')}
              resizeMode="contain"
              style={notificationStyle.avatar}
            />
            <View style={notificationStyle.notificationInfo}>
              <CustomText
                fontType="medium"
                customStyle={{
                  marginBottom: sizeBlock.getHeightSize(5),
                }}
                numLine={1}
                fontSize={fontSize.primary}>
                Xela Oladipupo sent you a message
              </CustomText>
              <CustomText numLine={5} fontSize={fontSize.primary - 2}>
                Draxler Chills sent you a message to your inbox in response to
                the shipping of your item
              </CustomText>
            </View>
            <EditIcon
              name="dots-three-vertical"
              size={fontSize.small}
              color={appColors.black}
            />
          </View>

          <View style={notificationStyle.notificationContainer}>
            <TopupIcon width={50} />
            <View style={notificationStyle.notificationInfo}>
              <CustomText
                fontType="medium"
                customStyle={{
                  marginBottom: sizeBlock.getHeightSize(5),
                }}
                numLine={1}
                fontSize={fontSize.primary}>
                Wallet top-up
              </CustomText>
              <CustomText numLine={5} fontSize={fontSize.primary - 2}>
                Ajulu Francis - 1494*****777 sent $200.00 to your wallet....
              </CustomText>
            </View>
            <EditIcon
              name="dots-three-vertical"
              size={fontSize.small}
              color={appColors.black}
            />
          </View>

          <View style={notificationStyle.notificationContainer}>
            <ReferralIcon width={50} />
            <View style={notificationStyle.notificationInfo}>
              <CustomText
                fontType="medium"
                customStyle={{
                  marginBottom: sizeBlock.getHeightSize(5),
                }}
                numLine={1}
                fontSize={fontSize.primary}>
                Referral
              </CustomText>
              <CustomText numLine={5} fontSize={fontSize.primary - 2}>
                Ajulu Francis just joined S2S app using your referral invite
                code...
              </CustomText>
            </View>
            <EditIcon
              name="dots-three-vertical"
              size={fontSize.small}
              color={appColors.black}
            />
          </View>
        </ScrollView>

        <OutlinedButton
          title="See more"
          customViewStyle={{marginTop: sizeBlock.getHeightSize(30)}}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
