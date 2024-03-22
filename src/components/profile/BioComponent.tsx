import {ScrollView, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import PencilIcon from 'react-native-vector-icons/EvilIcons';
import ArrowIcon from 'react-native-vector-icons/FontAwesome6';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';

type Props = {};

const BioComponent = (props: Props) => {
  return (
    <ScrollView style={{height: screenHeight / 2.8}}>
      <View style={styles.header}>
        <CustomText fontType="medium">Bio</CustomText>
        <PencilIcon
          name="pencil"
          size={fontSize.medium}
          color={appColors.onGradientPrimary}
        />
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
        Recents
      </CustomText>

      <View style={styles.recentContent}>
        <FastImage
          source={require('../../assets/images/avatar.jpg')}
          style={styles.avatar}
          resizeMode="contain"
        />
        <View>
          <CustomText fontType="semiBold" fontSize={fontSize.primary}>
            Xela Oladipupo
          </CustomText>
        </View>
        <ArrowIcon
          name="arrow-right-long"
          size={fontSize.small}
          color={appColors.black}
        />
      </View>
      <View style={styles.recentContent}>
        <FastImage
          source={require('../../assets/images/avatar.jpg')}
          style={styles.avatar}
          resizeMode="contain"
        />
        <View>
          <CustomText fontType="semiBold" fontSize={fontSize.primary}>
            Xela Oladipupo
          </CustomText>
        </View>
        <ArrowIcon
          name="arrow-right-long"
          size={fontSize.small}
          color={appColors.black}
        />
      </View>
      <View style={styles.recentContent}>
        <FastImage
          source={require('../../assets/images/avatar.jpg')}
          style={styles.avatar}
          resizeMode="contain"
        />
        <View>
          <CustomText fontType="semiBold" fontSize={fontSize.primary}>
            Xela Oladipupo
          </CustomText>
        </View>
        <ArrowIcon
          name="arrow-right-long"
          size={fontSize.small}
          color={appColors.black}
        />
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
  recentContent: {
    width: '100%',
    backgroundColor: appColors.white,
    ...universalStyle.spaceBetween,
    padding: sizeBlock.getWidthSize(15),
    marginVertical: sizeBlock.getHeightSize(20),
    borderRadius: borderRadius.small,
  },
});

export default BioComponent;
