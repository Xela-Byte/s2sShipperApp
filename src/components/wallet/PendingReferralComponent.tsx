import {View, Text, StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import FastImage from 'react-native-fast-image';
import {homeStyle} from '../../styles/HomeStyle';
import CustomText from '../text/CustomText';
import PendingIcon from '../../assets/svgs/PendingIcon';

type Props = {};

const PendingReferralComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../assets/images/avatar.jpg')}
        style={styles.avatar}
        resizeMode="contain"
      />
      <View style={{width: '60%'}}>
        <CustomText fontType="medium" fontSize={fontSize.primary}>
          Xela Oladipupo
        </CustomText>
        <CustomText color={appColors.gray} fontSize={fontSize.primary - 2}>
          3 days ago
        </CustomText>
      </View>
      <PendingIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...universalStyle.spaceBetween,
    padding: sizeBlock.getHeightSize(20),
  },
  avatar: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
  },
});

export default PendingReferralComponent;
