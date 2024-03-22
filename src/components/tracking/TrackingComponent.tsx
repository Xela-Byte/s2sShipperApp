import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';

type Props = {};

const TrackingComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <CustomText fontSize={fontSize.primary - 4} color={appColors.white}>
          In progress
        </CustomText>
      </View>

      <CustomText fontSize={fontSize.primary - 2}>
        Track Number:{'   '}
        <CustomText
          fontSize={fontSize.primary - 2}
          color={appColors.textPrimary}
          fontType="medium">
          242-064-202
        </CustomText>
      </CustomText>

      <CustomText fontSize={fontSize.primary - 2}>
        Delivery Address:{'   '}
        <CustomText
          fontSize={fontSize.primary - 2}
          color={appColors.textPrimary}
          fontType="medium">
          Surabuya, Indonesia
        </CustomText>
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizeBlock.getHeightSize(150),
    borderRadius: borderRadius.medium,
    position: 'relative',
    marginBottom: sizeBlock.getHeightSize(20),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: sizeBlock.getWidthSize(30),
    paddingTop: sizeBlock.getHeightSize(20),
    rowGap: sizeBlock.getHeightSize(10),
    borderColor: appColors.grey,
    borderWidth: 1,
  },
  tag: {
    position: 'absolute',
    backgroundColor: appColors.onGradientPrimary,
    padding: sizeBlock.getWidthSize(10),
    borderTopLeftRadius: borderRadius.medium,
    borderBottomRightRadius: borderRadius.medium,
    top: 0,
    left: 0,
  },
});

export default TrackingComponent;
