import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const authStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    backgroundColor: appColors.lightGrey,
  },
  tabContainer: {
    width: '70%',
    height: sizeBlock.getHeightSize(50),
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: appColors.white,
    marginLeft: '15%',
    marginTop: sizeBlock.getHeightSize(50),
    borderRadius: borderRadius.full,
  },
  tabSlider: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 9,
    borderRadius: borderRadius.full,
  },
  tabContent: {
    width: '50%',
    height: '100%',
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    zIndex: 10,
  },
  loginContainer: {
    width: '100%',
    paddingTop: sizeBlock.getWidthSize(70),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  registerContainer: {
    width: '100%',
    paddingTop: sizeBlock.getWidthSize(35),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  loginRecover: {
    flexDirection: 'row',
    columnGap: sizeBlock.getWidthSize(5),
    marginLeft: 'auto',
    paddingRight: sizeBlock.getWidthSize(5),
  },
  logo: {
    width: sizeBlock.getWidthSize(60),
    height: sizeBlock.getWidthSize(60),
    marginBottom: sizeBlock.getHeightSize(20),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  seperator: {
    width: '100%',
    height: sizeBlock.getHeightSize(2),
    backgroundColor: appColors.gray,
    marginVertical: sizeBlock.getHeightSize(45),
  },
});
