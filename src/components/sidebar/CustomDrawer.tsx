import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
} from '../../styles/UniversalStyle';
import S2SBG from '../../assets/images/s2sBGNew.jpg';
import {universalStyle} from '../../styles/UniversalStyle';
import FastImage from 'react-native-fast-image';
import CustomText from '../text/CustomText';
import DiamondIcon from '../../assets/svgs/DiamondIcon';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View
      style={{
        backgroundColor: appColors.white,
        flex: 1,
      }}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <DrawerContentScrollView {...props}>
        <ImageBackground source={S2SBG} style={styles.bgContainer}>
          <FastImage
            source={require('../../assets/images/s2sWhite.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.avatarContainer}>
            <FastImage
              source={require('../../assets/images/avatar.jpg')}
              style={styles.avatar}
              resizeMode="contain"
            />
            <View style={styles.username}>
              <CustomText
                fontType="semiBold"
                color={appColors.white}
                fontSize={fontSize.primary}>
                Xela Oladipupo
              </CustomText>

              <View
                style={{
                  flexDirection: 'row',
                  columnGap: sizeBlock.getWidthSize(5),
                }}>
                <DiamondIcon />
                <CustomText
                  color={appColors.white}
                  fontSize={fontSize.primary - 2}>
                  Shipper
                </CustomText>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.linkContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  bgContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(200),
    position: 'absolute',
    ...universalStyle.centering,
    paddingTop: sizeBlock.getHeightSize(20),
    flexDirection: 'column',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  linkContainer: {
    marginTop: sizeBlock.getHeightSize(180),
  },
  avatarContainer: {
    width: '90%',
    height: '40%',
    backgroundColor: appColors.onGradientPrimary,
    borderRadius: borderRadius.small,
    ...universalStyle.centering,
  },
  avatar: {
    width: sizeBlock.getWidthSize(45),
    height: sizeBlock.getWidthSize(45),
    borderRadius: borderRadius.full,
  },
  username: {
    width: '70%',
    paddingLeft: sizeBlock.getWidthSize(10),
  },
  logo: {
    width: sizeBlock.getWidthSize(45),
    height: sizeBlock.getWidthSize(45),
    marginBottom: sizeBlock.getHeightSize(20),
  },
});
