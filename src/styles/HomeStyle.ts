import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  fontFamily,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const homeStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    height: screenHeight - sizeBlock.getHeightSize(80),
  },
  headerWrapper: {
    width: '100%',
    height: screenHeight / 2.3,
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
  catchPhrase: {
    paddingHorizontal: sizeBlock.getWidthSize(30),
    paddingTop: sizeBlock.getHeightSize(30),
    ...universalStyle.spaceBetween,
  },
  searchBar: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: appColors.lightGrey,
    marginTop: sizeBlock.getHeightSize(20),
    height: 50,
    minHeight: sizeBlock.getHeightSize(50),
  },
  actionButtonContainer: {
    paddingTop: sizeBlock.getHeightSize(25),
    ...universalStyle.spaceEvenly,
  },
  actionButtonContent: {
    ...universalStyle.verticalCentering,
    flexDirection: 'column',
    rowGap: sizeBlock.getHeightSize(10),
  },
  actionButton: {
    width: sizeBlock.getWidthSize(35),
    height: sizeBlock.getWidthSize(35),
    borderRadius: borderRadius.small,
    backgroundColor: appColors.white,
    ...universalStyle.centering,
  },
  searchBarInput: {
    fontFamily: fontFamily.regular,
    color: appColors.black,
    height: '100%',
    fontSize: fontSize.primary,
    minHeight: sizeBlock.getHeightSize(50),
  },
  mainActionContainer: {
    width: '100%',
    ...universalStyle.spaceEvenly,
    marginTop: sizeBlock.getHeightSize(30),
  },
  mainActionButton: {
    width: (screenWidth * 0.85) / 2,
    height: (screenWidth * 0.85) / 2,
    borderRadius: borderRadius.medium,
    borderWidth: 2,
    borderColor: appColors.gray,
    ...universalStyle.centering,
    flexDirection: 'column',
    padding: sizeBlock.getWidthSize(5),
  },
  recentTrackingText: {
    ...universalStyle.spaceBetween,
    ...universalStyle.verticalCentering,
    paddingHorizontal: sizeBlock.getWidthSize(20),
    paddingVertical: sizeBlock.getHeightSize(30),
  },
  recentTrackingContainer: {
    paddingHorizontal: sizeBlock.getWidthSize(25),
  },
});
