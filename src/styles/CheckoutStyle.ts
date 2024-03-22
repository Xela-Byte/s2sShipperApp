import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const checkoutStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    backgroundColor: appColors.lightGrey,
  },
  content: {
    padding: sizeBlock.getWidthSize(20),
  },
  textContainer: {
    width: sizeBlock.getWidthSize(90),
    borderWidth: 1,
    borderColor: 'green',
    padding: sizeBlock.getWidthSize(10),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  textDivider: {
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
  },
  summaryContainer: {
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: borderRadius.medium,
    padding: sizeBlock.getWidthSize(20),
  },
  summaryContent: {
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(10),
  },
  shipmentContainer: {
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: borderRadius.medium,
    padding: sizeBlock.getWidthSize(20),
    marginVertical: sizeBlock.getHeightSize(20),
  },
  shipmentContent: {
    ...universalStyle.centering,
    paddingVertical: sizeBlock.getHeightSize(20),
    height: sizeBlock.getHeightSize(150),
  },
  shipment: {
    width: '50%',
    padding: sizeBlock.getWidthSize(10),
  },
  checkoutInfo: {
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: borderRadius.medium,
    padding: sizeBlock.getWidthSize(20),
    marginBottom: sizeBlock.getHeightSize(20),
  },
});
