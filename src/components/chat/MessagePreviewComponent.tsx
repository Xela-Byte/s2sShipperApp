import {View, Text, StyleSheet, StatusBar, Pressable} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
} from '../../styles/UniversalStyle';
import FastImage from 'react-native-fast-image';
import {universalStyle} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import {ChatScreenProps} from '../../types/navigation/ChatNavigationType';

const MessagePreviewComponent = ({navigation}: ChatScreenProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate('MessageScreen', {
          name: 'Xela Oladipupo',
        });
      }}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.avatarContainer}>
        <FastImage
          source={require('../../assets/images/avatar.jpg')}
          style={styles.avatar}
          resizeMode="contain"
        />
        <View style={styles.onlineDot} />
      </View>
      <View style={styles.messageContainer}>
        <CustomText fontSize={fontSize.primary} fontType="medium">
          Xela Oladipupo
        </CustomText>
        <CustomText
          customStyle={{marginTop: sizeBlock.getHeightSize(5)}}
          color={appColors.gray}
          numLine={1}
          fontSize={fontSize.primary - 2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          doloribus non quam ex reiciendis eum natus quas maxime cum ratione?
        </CustomText>
      </View>

      <View style={styles.info}>
        <CustomText
          fontType="medium"
          color={appColors.textPrimary}
          customStyle={{marginBottom: sizeBlock.getHeightSize(5)}}
          fontSize={fontSize.primary}>
          12:00 AM
        </CustomText>
        <View style={styles.countContainer}>
          <CustomText
            fontType="semiBold"
            color={appColors.white}
            fontSize={fontSize.primary}>
            1
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizeBlock.getHeightSize(60),
    paddingVertical: sizeBlock.getHeightSize(10),
    marginBottom: sizeBlock.getHeightSize(10),
    ...universalStyle.spaceBetween,
  },
  avatarContainer: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.full,
  },
  onlineDot: {
    width: sizeBlock.getWidthSize(12),
    height: sizeBlock.getWidthSize(12),
    backgroundColor: 'green',
    borderRadius: borderRadius.full,
    position: 'absolute',
    borderWidth: 2,
    borderColor: appColors.lightGrey,
    bottom: 0,
    right: 0,
  },
  messageContainer: {
    width: '55%',
  },
  countContainer: {
    width: sizeBlock.getHeightSize(20),
    height: sizeBlock.getHeightSize(20),
    backgroundColor: appColors.onGradientPrimary,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  info: {
    alignItems: 'flex-end',
  },
});

export default MessagePreviewComponent;
