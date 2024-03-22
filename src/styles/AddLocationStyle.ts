import {StyleSheet} from 'react-native';
import {
  appColors,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const addLocationStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    backgroundColor: appColors.lightGrey,
  },
  highlight1: {
    position: 'absolute',
    right: -screenWidth / 4,
    zIndex: -6,
  },
  highlight2: {
    position: 'absolute',
    left: -screenWidth / 2.5,
    zIndex: -6,
    bottom: -screenHeight / 4,
  },
  content: {
    width: '100%',
    ...universalStyle.centering,
    flexDirection: 'column',
    paddingHorizontal: sizeBlock.getWidthSize(20),
    paddingTop: sizeBlock.getWidthSize(30),
    zIndex: -5,
  },
  logo: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    marginBottom: sizeBlock.getWidthSize(20),
    zIndex: 1,
  },
});
