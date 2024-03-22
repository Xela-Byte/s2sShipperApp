import {useState} from 'react';
import {Pressable, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import PencilIcon from 'react-native-vector-icons/EvilIcons';
import HeaderComponent from '../../../components/header/HeaderComponent';
import BioComponent from '../../../components/profile/BioComponent';
import CustomText from '../../../components/text/CustomText';
import {profileStyle} from '../../../styles/ProfileStyle';
import {appColors, fontSize} from '../../../styles/UniversalStyle';
import GalleryComponent from '../../../components/profile/GalleryComponent';

type Props = {};

const ProfileScreen = (props: Props) => {
  const [activeTab, setActiveTab] = useState<'AboutMe' | 'Gallery'>('AboutMe');

  return (
    <View style={profileStyle.container}>
      <HeaderComponent title="Profile" onPress={() => {}} />
      <View style={profileStyle.content}>
        <FastImage
          source={require('../../../assets/images/avatar.jpg')}
          style={profileStyle.avatar}
          resizeMode="contain"
        />
        <View style={profileStyle.nameContainer}>
          <CustomText>Xela Oladipupo</CustomText>
          <PencilIcon
            name="pencil"
            size={fontSize.medium}
            color={appColors.onGradientPrimary}
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
                },
              ]}>
              <CustomText
                color={
                  activeTab === 'AboutMe'
                    ? appColors.onGradientPrimary
                    : appColors.black
                }>
                About Me
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
                },
              ]}>
              <CustomText
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
            <BioComponent />
          </Animatable.View>
        )}
        {activeTab === 'Gallery' && (
          <Animatable.View animation={'slideInLeft'} duration={500}>
            <GalleryComponent />
          </Animatable.View>
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;
