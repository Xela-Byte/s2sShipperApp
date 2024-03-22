import {StyleSheet} from 'react-native';
import {
  appColors,
  fontFamily,
  fontSize,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const chatStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    backgroundColor: appColors.lightGrey,
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(20),
    paddingTop: sizeBlock.getHeightSize(50),
  },
  searchBarInput: {
    fontFamily: fontFamily.regular,
    color: appColors.black,
    height: '100%',
    fontSize: fontSize.primary,
    minHeight: sizeBlock.getHeightSize(50),
  },
  searchBar: {
    backgroundColor: appColors.white,
    marginTop: sizeBlock.getHeightSize(20),
    height: 50,
    minHeight: sizeBlock.getHeightSize(50),
  },
});
