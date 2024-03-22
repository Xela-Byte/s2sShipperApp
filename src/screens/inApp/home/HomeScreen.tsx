import {useEffect, useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Icon, Searchbar} from 'react-native-paper';
import {
  default as InfoIcon,
  default as RightIcon,
} from 'react-native-vector-icons/AntDesign';
import {
  default as RefreshIcon,
  default as SendIcon,
} from 'react-native-vector-icons/Feather';
import AirplaneIcon from 'react-native-vector-icons/SimpleLineIcons';
import BellIcon from '../../../assets/svgs/BellIcon';
import HandshakeIcon from '../../../assets/svgs/HandshakeIcon';
import MenuIcon from '../../../assets/svgs/MenuIcon';
import PackageIcon from '../../../assets/svgs/PackageIcon';
import PendingPackageIcon from '../../../assets/svgs/PendingPackageIcon';
import PopupComponent from '../../../components/popup/PopupComponent';
import CustomText from '../../../components/text/CustomText';
import TrackingComponent from '../../../components/tracking/TrackingComponent';
import {homeStyle} from '../../../styles/HomeStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {HomeScreenProps} from '../../../types/navigation/SideNavigationType';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <View style={homeStyle.container}>
      <PopupComponent
        setShowPopup={setShowPopup}
        showPopup={showPopup}
        navigation={navigation}
      />
      <ScrollView>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />
        <View style={homeStyle.headerWrapper}>
          <FastImage
            source={require('../../../assets/images/HomeBG.jpg')}
            style={homeStyle.bgImage}
            resizeMode="cover"
          />

          <View style={homeStyle.headerContainer}>
            <View style={homeStyle.headerContent}>
              <FastImage
                source={require('../../../assets/images/s2sWhite.png')}
                style={homeStyle.logo}
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
            <View style={homeStyle.profileContent}>
              <View>
                <View style={homeStyle.greeting}>
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
                style={homeStyle.avatar}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={homeStyle.catchPhrase}>
            <CustomText fontType="medium" color={appColors.white}>
              Effortless Shipping,{'\n'}Seamless Tracking
            </CustomText>
            <BellIcon
              onPress={() => {
                navigation.navigate('NotificationScreen');
              }}
            />
          </View>

          <Searchbar
            placeholder="Enter Track ID Number"
            onChangeText={onChangeSearch}
            value={searchQuery}
            iconColor={appColors.grey}
            placeholderTextColor={appColors.grey}
            inputStyle={homeStyle.searchBarInput}
            cursorColor={appColors.black}
            selectionColor={appColors.grey}
            style={homeStyle.searchBar}
            traileringIcon={() => (
              <Icon
                size={fontSize.medium}
                source="filter-outline"
                color={appColors.onGradientPrimary}
              />
            )}
          />
          <View style={homeStyle.actionButtonContainer}>
            <View style={homeStyle.actionButtonContent}>
              <View style={homeStyle.actionButton}>
                <RefreshIcon
                  name="refresh-ccw"
                  size={fontSize.small}
                  color={appColors.onGradientPrimary}
                />
              </View>
              <CustomText
                fontSize={fontSize.primary - 4}
                color={appColors.white}>
                Check Rates
              </CustomText>
            </View>
            <View style={homeStyle.actionButtonContent}>
              <View style={homeStyle.actionButton}>
                <AirplaneIcon
                  name="plane"
                  size={fontSize.small}
                  color={appColors.onGradientPrimary}
                />
              </View>
              <CustomText
                fontSize={fontSize.primary - 4}
                color={appColors.white}>
                Track orders
              </CustomText>
            </View>
            <View style={homeStyle.actionButtonContent}>
              <View style={homeStyle.actionButton}>
                <SendIcon
                  name="send"
                  size={fontSize.small}
                  color={appColors.onGradientPrimary}
                />
              </View>
              <CustomText
                fontSize={fontSize.primary - 4}
                color={appColors.white}>
                Nearby drop
              </CustomText>
            </View>
            <View style={homeStyle.actionButtonContent}>
              <View style={homeStyle.actionButton}>
                <InfoIcon
                  name="infocirlceo"
                  size={fontSize.small}
                  color={appColors.onGradientPrimary}
                />
              </View>
              <CustomText
                fontSize={fontSize.primary - 4}
                color={appColors.white}>
                Help center
              </CustomText>
            </View>
          </View>
        </View>
        <View style={homeStyle.mainActionContainer}>
          <View style={homeStyle.mainActionButton}>
            <PackageIcon />
            <CustomText fontSize={fontSize.primary}>Ship Package</CustomText>
          </View>
          <View style={homeStyle.mainActionButton}>
            <PendingPackageIcon />
            <CustomText fontSize={fontSize.primary}>Pending Package</CustomText>
          </View>
        </View>

        <View style={homeStyle.recentTrackingText}>
          <CustomText fontSize={fontSize.primary} color={appColors.gray}>
            Recent Tracking
          </CustomText>
          <CustomText
            fontSize={fontSize.primary - 2}
            fontType="medium"
            color={appColors.textPrimary}>
            See all
          </CustomText>
        </View>

        <View style={homeStyle.recentTrackingContainer}>
          <TrackingComponent />
          <TrackingComponent />
          <TrackingComponent />
        </View>

        <View style={homeStyle.recentTrackingText}>
          <CustomText fontType="medium" fontSize={fontSize.primary}>
            Sister shippers near you
          </CustomText>
          <RightIcon
            name="right"
            color={appColors.black}
            size={fontSize.primary}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
