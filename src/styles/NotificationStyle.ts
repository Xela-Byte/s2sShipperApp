import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const notificationStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    backgroundColor: appColors.lightGrey,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(20),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  notificationContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(130),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.small,
    marginVertical: sizeBlock.getHeightSize(5),
    paddingHorizontal: sizeBlock.getWidthSize(15),
    paddingVertical: sizeBlock.getHeightSize(25),
    ...universalStyle.spaceBetween,
    alignItems: 'flex-start',
  },
  avatar: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
  },
  notificationInfo: {
    width: '70%',
  },
});
