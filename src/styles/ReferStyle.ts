import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const referStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingHorizontal: sizeBlock.getHeightSize(20),
    paddingTop: sizeBlock.getHeightSize(30),
  },
  balanceContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(150),
    backgroundColor: appColors.onGradientPrimary,
    borderRadius: borderRadius.medium,
  },
  balanceHeader: {
    ...universalStyle.spaceBetween,
    paddingHorizontal: sizeBlock.getWidthSize(20),
    paddingVertical: sizeBlock.getHeightSize(25),
  },
  balanceUtility: {
    ...universalStyle.spaceBetween,
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  topupBalance: {
    width: sizeBlock.getWidthSize(140),
    backgroundColor: appColors.white,
    padding: sizeBlock.getWidthSize(10),
    borderRadius: borderRadius.full,
    ...universalStyle.spaceEvenly,
  },
  friendIcon: {
    ...universalStyle.centering,
  },
  description: {
    paddingHorizontal: sizeBlock.getWidthSize(10),
  },
  referLinkContainer: {
    padding: sizeBlock.getWidthSize(15),
    backgroundColor: appColors.lightGray,
    borderRadius: borderRadius.medium,
    marginTop: sizeBlock.getHeightSize(10),
    ...universalStyle.spaceBetween,
  },
  shareContainer: {
    padding: sizeBlock.getWidthSize(15),
    marginVertical: sizeBlock.getHeightSize(10),
    ...universalStyle.spaceBetween,
  },
  stepContainer: {
    paddingVertical: sizeBlock.getHeightSize(10),
  },
  stepContent: {
    paddingVertical: sizeBlock.getHeightSize(10),
    flexDirection: 'row',
  },
  recentTrackingText: {
    ...universalStyle.spaceBetween,
    ...universalStyle.verticalCentering,
    paddingVertical: sizeBlock.getHeightSize(30),
  },
});
