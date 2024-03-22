import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import DebitIcon from '../../assets/svgs/DebitIcon';
import {universalStyle} from '../../styles/UniversalStyle';
import DebiitArrowIcon from '../../assets/svgs/DebitArrowIcon';
import CreditIcon from '../../assets/svgs/CreditIcon';
import CreditArrowIcon from '../../assets/svgs/CreditArrowIcon';
import EditIcon from 'react-native-vector-icons/Entypo';

type Props = {
  transactType: 'sent' | 'received';
  date: string;
};

const TransactionComponent = ({transactType, date}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <CustomText fontSize={fontSize.primary - 4} color={appColors.white}>
          {date}
        </CustomText>
      </View>
      <View style={styles.header}>
        <CustomText
          fontType="semiBold"
          fontSize={fontSize.primary - 4}
          color={appColors.black}>
          7:40 PM
        </CustomText>
        <EditIcon name="dots-three-vertical" color={appColors.black} />
      </View>
      <View style={styles.details}>
        {transactType === 'sent' ? <DebitIcon /> : <CreditIcon />}
        <CustomText fontSize={fontSize.primary} color={appColors.black}>
          20 barrrels of Oil
        </CustomText>
      </View>

      <View style={styles.footer}>
        <CustomText fontType="medium" fontSize={fontSize.primary} color={'red'}>
          $300.00
        </CustomText>
        {transactType === 'sent' ? (
          <DebiitArrowIcon />
        ) : (
          <CreditArrowIcon
            style={{
              transform: [{rotate: '180deg'}],
            }}
          />
        )}
        <CustomText fontSize={fontSize.primary} color={appColors.gray}>
          1234****901234
        </CustomText>
      </View>
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
    paddingHorizontal: sizeBlock.getWidthSize(30),
    backgroundColor: appColors.white,
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
  header: {
    paddingLeft: sizeBlock.getWidthSize(40),
    paddingTop: sizeBlock.getWidthSize(10),
    ...universalStyle.spaceBetween,
  },
  details: {
    paddingTop: sizeBlock.getHeightSize(30),
    ...universalStyle.verticalCentering,
    columnGap: sizeBlock.getWidthSize(10),
  },
  footer: {
    paddingTop: sizeBlock.getHeightSize(15),
    ...universalStyle.spaceBetween,
  },
});

export default TransactionComponent;
