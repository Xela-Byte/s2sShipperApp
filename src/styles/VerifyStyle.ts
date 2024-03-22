import {StyleSheet} from 'react-native';
import {appColors, sizeBlock, universalStyle} from './UniversalStyle';

export const verifyStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    backgroundColor: appColors.lightGrey,
    paddingTop: sizeBlock.getHeightSize(30),
    paddingHorizontal: sizeBlock.getWidthSize(30),
  },
});
