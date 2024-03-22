import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {
  appColors,
  fontSize,
  screenWidth,
  sizeBlock,
} from '../../styles/UniversalStyle';
import ArrowIcon from 'react-native-vector-icons/FontAwesome6';
import CustomText from '../text/CustomText';
import {universalStyle} from '../../styles/UniversalStyle';
import FastImage from 'react-native-fast-image';
import EditIcon from 'react-native-vector-icons/Entypo';

type Props = {
  onPress: () => void;
  title: string;
  isProfile?: boolean;
};

const HeaderComponent = ({onPress, title, isProfile}: Props) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <ArrowIcon
            name={'arrow-left-long'}
            size={fontSize.small}
            color={appColors.white}
            onPress={onPress}
          />
          <CustomText
            color={appColors.white}
            fontType="medium"
            fontSize={fontSize.primary}>
            {title}
          </CustomText>
          <FastImage
            source={require('../../assets/images/s2sWhite.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          {isProfile && (
            <EditIcon
              name="dots-three-vertical"
              size={fontSize.small}
              color={appColors.white}
            />
          )}
        </View>
        <View style={styles.bg}>
          <FastImage
            source={require('../../assets/images/silverBG.jpg')}
            style={styles.silverBG}
            resizeMode="cover"
          />
          <View style={[styles.silverBG, {backgroundColor: appColors.brown}]} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizeBlock.getHeightSize(130),
    backgroundColor: appColors.onGradientPrimary,
    justifyContent: 'flex-end',
    padding: sizeBlock.getWidthSize(20),
    position: 'relative',
  },
  content: {
    paddingVertical: sizeBlock.getHeightSize(10),
    ...universalStyle.verticalCentering,
    columnGap: sizeBlock.getWidthSize(20),
  },
  logo: {
    width: sizeBlock.getWidthSize(35),
    height: sizeBlock.getWidthSize(35),
    marginLeft: 'auto',
  },
  silverBG: {
    width: screenWidth,
    height: sizeBlock.getHeightSize(7),
  },
  bg: {
    position: 'absolute',
    bottom: 0,
  },
});

export default HeaderComponent;
