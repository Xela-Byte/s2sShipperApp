import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const profileStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    backgroundColor: appColors.lightGrey,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(30),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  avatar: {
    width: sizeBlock.getHeightSize(120),
    height: sizeBlock.getHeightSize(120),
    borderRadius: borderRadius.full,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  nameContainer: {
    ...universalStyle.centering,
    paddingVertical: sizeBlock.getHeightSize(20),
    columnGap: sizeBlock.getWidthSize(10),
  },
  tabContainer: {
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(10),
    width: '100%',
  },
  tabContent: {
    ...universalStyle.centering,
    padding: sizeBlock.getWidthSize(20),
    width: '100%',
  },
});
