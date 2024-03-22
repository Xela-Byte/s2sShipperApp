import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const bonusWithdrawalStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(20),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  balanceContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(70),
    backgroundColor: appColors.onGradientPrimary,
    borderRadius: borderRadius.small,
    ...universalStyle.spaceEvenly,
  },
  highlight: {
    position: 'absolute',
    left: -screenWidth / 2,
    zIndex: -6,
    bottom: -screenHeight / 3,
  },
});
