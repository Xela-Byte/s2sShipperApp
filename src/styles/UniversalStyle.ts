import {Dimensions, StyleSheet} from 'react-native';
import {sizes} from '../utils/responsiveness/sizeBlock';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

export const appColors = {
  white: '#FFFFFF',
  black: '#010300',
  onGradientPrimary: '#D85169',
  onGradientSecondary: '#742200',
  lightGrey: '#FAFAFA',
  grey: '#BDBFC1',
  gray: '#808080',
  textPrimary: '#D85169',
  lightGray: '#ECECEC',
  brown: '#6B2726',
  pink: '#F2B1B6',
};

export const sizeBlock = new sizes(screenHeight, screenWidth);

export const fontSize = {
  primary: sizeBlock.fontSize(14),
  small: sizeBlock.fontSize(16),
  medium: sizeBlock.fontSize(25),
  large: sizeBlock.fontSize(50),
};

export const fontFamily = {
  light: 'Montserrat-Light',
  thin: 'Montserrat-Thin',
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  semiBold: 'Montserrat-SemiBold',
  bold: 'Montserrat-Bold',
  lightItalic: 'Montserrat-LightItalic',
  mediumItalic: 'Montserrat-MediumItalic',
  semiBoldItalic: 'Montserrat-SemiBoldItalic',
  boldItalic: 'Montserrat-BoldItalic',
};

export const borderRadius = {
  small: 8,
  medium: 15,
  large: 30,
  full: 9999,
};

export const universalStyle = StyleSheet.create({
  centering: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  verticalCentering: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: appColors.white,
  },
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  spaceEvenly: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  spaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
