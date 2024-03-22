import {StyleSheet} from 'react-native';
import {appColors, sizeBlock, universalStyle} from './UniversalStyle';

export const shipperProfileStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    backgroundColor: appColors.lightGrey,
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
});
