import {useState} from 'react';
import {Pressable, SafeAreaView, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import {default as RightIcon} from 'react-native-vector-icons/AntDesign';
import OutlinedButton from '../../../components/button/OutlinedButton';
import HeaderComponent from '../../../components/header/HeaderComponent';
import GalleryComponent from '../../../components/profile/GalleryComponent';
import ShipperBioComponent from '../../../components/profile/ShipperBioComponent';
import CustomText from '../../../components/text/CustomText';
import {homeStyle} from '../../../styles/HomeStyle';
import {messageStyle} from '../../../styles/MessageStyle';
import {profileStyle} from '../../../styles/ProfileStyle';
import {shipperProfileStyle} from '../../../styles/ShipperProfileStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {ShipperProfileProps} from '../../../types/navigation/ChatNavigationType';

const ShipperProfile = ({navigation}: ShipperProfileProps) => {
  const [activeTab, setActiveTab] = useState<'AboutMe' | 'Gallery'>('AboutMe');

  return (
    <SafeAreaView style={shipperProfileStyle.container}>
      <HeaderComponent title="Xela Oladipupo" onPress={navigation.goBack} />
      <View style={messageStyle.profilePictureContainer}>
        <FastImage
          source={require('../../../assets/images/avatar.jpg')}
          resizeMode="contain"
          style={messageStyle.profilePicture}
        />
      </View>
      <CustomText fontType="medium" customStyle={{textAlign: 'center'}}>
        Xela Oladipupo
      </CustomText>
      <View style={shipperProfileStyle.content}>
        <OutlinedButton
          title="Message"
          customViewStyle={{
            marginTop: sizeBlock.getHeightSize(20),
          }}
          onPress={() => {
            navigation.navigate('MessageScreen', {
              name: 'Xela Oladipupo - Shipper',
            });
          }}
        />
        <View style={homeStyle.recentTrackingText}>
          <CustomText fontType="semiBold" fontSize={fontSize.primary}>
            View media
          </CustomText>
          <RightIcon
            name="right"
            color={appColors.black}
            size={fontSize.primary}
          />
        </View>
        <View style={profileStyle.tabContainer}>
          <Pressable
            style={{width: '45%'}}
            onPress={() => {
              setActiveTab('AboutMe');
            }}>
            <Animatable.View
              transition={['borderBottomWidth', 'borderColor']}
              style={[
                profileStyle.tabContent,
                {
                  borderBottomWidth: activeTab === 'AboutMe' ? 2 : 0,
                  borderColor:
                    activeTab === 'AboutMe'
                      ? appColors.onGradientPrimary
                      : appColors.black,
                  paddingVertical: sizeBlock.getHeightSize(5),
                },
              ]}>
              <CustomText
                fontSize={fontSize.primary}
                color={
                  activeTab === 'AboutMe'
                    ? appColors.onGradientPrimary
                    : appColors.black
                }>
                About Xela
              </CustomText>
            </Animatable.View>
          </Pressable>

          <Pressable
            style={{width: '45%'}}
            onPress={() => {
              setActiveTab('Gallery');
            }}>
            <Animatable.View
              transition={['borderBottomWidth', 'borderColor']}
              style={[
                profileStyle.tabContent,
                {
                  borderBottomWidth: activeTab === 'Gallery' ? 2 : 0,
                  borderColor:
                    activeTab === 'Gallery'
                      ? appColors.onGradientPrimary
                      : appColors.black,
                  paddingVertical: sizeBlock.getHeightSize(5),
                },
              ]}>
              <CustomText
                fontSize={fontSize.primary}
                color={
                  activeTab === 'Gallery'
                    ? appColors.onGradientPrimary
                    : appColors.black
                }>
                Gallery
              </CustomText>
            </Animatable.View>
          </Pressable>
        </View>
        {activeTab === 'AboutMe' && (
          <Animatable.View animation={'slideInRight'} duration={500}>
            <ShipperBioComponent />
          </Animatable.View>
        )}
        {activeTab === 'Gallery' && (
          <Animatable.View animation={'slideInLeft'} duration={500}>
            <GalleryComponent />
          </Animatable.View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ShipperProfile;
