import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const walletStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    height: screenHeight - sizeBlock.getHeightSize(80),
    backgroundColor: appColors.pink,
  },
  headerWrapper: {
    width: '100%',
    height: screenHeight / 3,
    position: 'relative',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: borderRadius.large,
    borderBottomRightRadius: borderRadius.large,
    position: 'absolute',
  },
  headerContainer: {
    ...universalStyle.spaceBetween,
    paddingHorizontal: sizeBlock.getWidthSize(30),
    paddingTop: sizeBlock.getWidthSize(60),
  },
  logo: {
    width: sizeBlock.getWidthSize(30),
    height: sizeBlock.getWidthSize(30),
  },
  headerContent: {
    ...universalStyle.centering,
    columnGap: sizeBlock.getWidthSize(10),
  },
  profileContent: {
    marginLeft: 'auto',
    ...universalStyle.centering,
    columnGap: sizeBlock.getWidthSize(10),
  },
  avatar: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
  },
  greeting: {
    ...universalStyle.centering,
    columnGap: sizeBlock.getWidthSize(10),
    marginBottom: sizeBlock.getHeightSize(2),
  },
  balanceHeader: {
    paddingTop: sizeBlock.getWidthSize(35),
    paddingHorizontal: sizeBlock.getWidthSize(30),
    ...universalStyle.spaceBetween,
    width: '70%',
  },
  balanceUtility: {
    ...universalStyle.spaceBetween,
    paddingTop: sizeBlock.getWidthSize(25),
    paddingHorizontal: sizeBlock.getWidthSize(30),
  },
  topupBalance: {
    width: sizeBlock.getWidthSize(120),
    backgroundColor: appColors.white,
    padding: sizeBlock.getWidthSize(10),
    borderRadius: borderRadius.full,
    ...universalStyle.spaceEvenly,
  },
  recentTrackingText: {
    ...universalStyle.spaceBetween,
    ...universalStyle.verticalCentering,
    paddingHorizontal: sizeBlock.getWidthSize(5),
    paddingVertical: sizeBlock.getHeightSize(30),
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(20),
    paddingTop: sizeBlock.getHeightSize(60),
  },
  referContent: {
    width: '100%',
    height: sizeBlock.getHeightSize(80),
    backgroundColor: appColors.white,
    position: 'relative',
    borderRadius: borderRadius.medium,
  },
  giftIcon: {
    width: sizeBlock.getWidthSize(150),
    height: sizeBlock.getHeightSize(170),
    position: 'absolute',
    top: -sizeBlock.getHeightSize(70),
    left: -sizeBlock.getWidthSize(20),
  },
  referContentText: {
    height: '100%',
    paddingLeft: sizeBlock.getWidthSize(105),
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: sizeBlock.getHeightSize(5),
  },
  banner: {
    width: sizeBlock.getWidthSize(80),
    height: sizeBlock.getHeightSize(80),
    position: 'absolute',
    top: -sizeBlock.getHeightSize(4),
    right: -sizeBlock.getWidthSize(12),
    zIndex: -4,
  },
});
