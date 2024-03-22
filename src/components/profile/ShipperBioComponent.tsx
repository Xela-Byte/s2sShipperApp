import {ScrollView, StyleSheet, View} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import FastImage from 'react-native-fast-image';
import {Rating} from 'react-native-ratings';
import moment from 'moment';

type Props = {};

const ShipperBioComponent = (props: Props) => {
  const presentTime = moment().format('hh:mm a');

  return (
    <ScrollView style={{height: screenHeight / 2.8}}>
      <View style={styles.header}>
        <CustomText fontType="medium">Bio</CustomText>
      </View>

      <View style={styles.content}>
        <CustomText fontSize={fontSize.primary}>
          Hi there! I am Draxler Chills. I am an experienced shipper. I ease
          customers the stress of transporting their items from a distant
          location to their expected destination.
        </CustomText>
      </View>

      <CustomText
        fontType="medium"
        customStyle={{
          marginTop: sizeBlock.getHeightSize(30),
          marginLeft: sizeBlock.getWidthSize(10),
        }}>
        Customer Reviews
      </CustomText>
      <View style={styles.reviewContent}>
        <View style={styles.reviewHeader}>
          <FastImage
            source={require('../../assets/images/avatar.jpg')}
            resizeMode="contain"
            style={styles.avatar}
          />
          <View style={styles.reviewHeaderInfo}>
            <CustomText fontType="medium" fontSize={fontSize.primary}>
              Xela Oladipupo
            </CustomText>
            <Rating
              showRating={false}
              ratingCount={5}
              startingValue={4.6}
              readonly
              imageSize={15}
              style={{
                width: '30%',
              }}
            />
          </View>
        </View>
        <CustomText
          customStyle={{marginVertical: sizeBlock.getHeightSize(20)}}
          fontSize={fontSize.primary}>
          My package arrived on time and in perfect condition, and I am super
          excited with the results. I appreciate your professionalism and
          efficiency. I will defiinitely be using your services again in the
          future. Thank you for making my experience so positive.
        </CustomText>
        <CustomText
          customStyle={{
            marginLeft: 'auto',
            marginTop: sizeBlock.getHeightSize(10),
          }}
          color={appColors.gray}
          fontType="medium"
          fontSize={fontSize.primary - 2}>
          {presentTime}
        </CustomText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizeBlock.getWidthSize(10),
    paddingVertical: sizeBlock.getHeightSize(20),
    ...universalStyle.spaceBetween,
  },
  content: {
    marginHorizontal: sizeBlock.getWidthSize(10),
    backgroundColor: appColors.white,
    padding: sizeBlock.getWidthSize(20),
    borderRadius: borderRadius.small,
  },
  avatar: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
  },
  reviewContent: {
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: borderRadius.small,
    marginVertical: sizeBlock.getHeightSize(20),
    padding: sizeBlock.getWidthSize(15),
  },
  reviewHeader: {
    ...universalStyle.spaceBetween,
  },
  reviewHeaderInfo: {
    width: '75%',
  },
});

export default ShipperBioComponent;
