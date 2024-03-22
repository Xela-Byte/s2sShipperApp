import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  screenWidth,
  sizeBlock,
} from './UniversalStyle';
import {universalStyle} from './UniversalStyle';

export const onboardingStyle = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    flex: 1,
    paddingHorizontal: sizeBlock.getWidthSize(20),
    paddingTop: sizeBlock.getHeightSize(50),
  },
  image: {
    width: screenWidth * 0.9,
    height: screenHeight / 2,
    marginLeft: 'auto',
  },
  dotStyle: {
    backgroundColor: appColors.grey,
    bottom: sizeBlock.getHeightSize(10),
  },
  activeDotStyle: {
    backgroundColor: appColors.onGradientPrimary,
    width: sizeBlock.getWidthSize(35),
    bottom: sizeBlock.getHeightSize(10),
  },
  nextButton: {
    width: '100%',
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    columnGap: sizeBlock.getWidthSize(10),
  },
  skipButton: {
    width: '100%',
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: appColors.onGradientPrimary,
    marginTop: sizeBlock.getHeightSize(10),
    ...universalStyle.centering,
  },
  doneButton: {
    width: '100%',
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    marginBottom: sizeBlock.getHeightSize(60),
    columnGap: sizeBlock.getWidthSize(10),
  },
});
