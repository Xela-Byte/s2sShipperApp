import {StyleSheet} from 'react-native';
import {
  borderRadius,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const messageStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(20),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  profilePicture: {
    width: sizeBlock.getWidthSize(100),
    height: sizeBlock.getWidthSize(100),
    borderRadius: borderRadius.full,
  },
  profilePictureContainer: {
    paddingVertical: sizeBlock.getWidthSize(20),
    ...universalStyle.centering,
  },
  bubble: {
    width: screenWidth / 1.7,
    padding: sizeBlock.getWidthSize(5),
  },
  bubbleContainer: {
    position: 'relative',
    paddingLeft: sizeBlock.getWidthSize(60),
    paddingBottom: sizeBlock.getHeightSize(25),
  },
  avatar: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
  },
});
