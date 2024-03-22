import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const postOrderStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    backgroundColor: appColors.lightGrey,
  },
  content: {
    padding: sizeBlock.getWidthSize(20),
  },
  progressContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(45),
    ...universalStyle.spaceBetween,
  },
  progressLine: {
    width: screenWidth * 0.7,
    height: sizeBlock.getHeightSize(3),
    backgroundColor: appColors.gray,
    borderRadius: borderRadius.small,
    position: 'absolute',
    top: sizeBlock.getHeightSize(20),
    left: sizeBlock.getHeightSize(45),
  },
  checkedProgressCircle: {
    width: sizeBlock.getHeightSize(45),
    height: sizeBlock.getHeightSize(45),
    borderRadius: borderRadius.full,
    borderWidth: 2,
    borderColor: appColors.onGradientPrimary,
    backgroundColor: appColors.grey,
  },
  progressCircle: {
    width: sizeBlock.getHeightSize(45),
    height: sizeBlock.getHeightSize(45),
    borderRadius: borderRadius.full,
    borderWidth: 2,
    borderColor: appColors.gray,
    backgroundColor: appColors.lightGrey,
  },
  recentOrderContainer: {
    width: '100%',
    backgroundColor: appColors.white,
    padding: sizeBlock.getWidthSize(20),
    ...universalStyle.spaceBetween,
    marginTop: sizeBlock.getHeightSize(15),
    height: sizeBlock.getHeightSize(130),
  },
  recentEdit: {
    alignItems: 'flex-end',
    height: '100%',
    justifyContent: 'space-between',
  },
  highlight: {
    position: 'absolute',
    left: -screenWidth / 2,
    zIndex: -6,
    bottom: -screenHeight / 3,
  },
  dimensionContainer: {
    ...universalStyle.spaceBetween,
  },
  datePicker: {
    backgroundColor: appColors.lightGray,
    height: sizeBlock.getHeightSize(55),
    borderRadius: borderRadius.full,
    ...universalStyle.spaceBetween,
    marginVertical: sizeBlock.getHeightSize(10),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
});
