import {Pressable, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import {ActivityIndicator} from 'react-native-paper';
import FacebookIcon from '../../assets/svgs/FacebookIcon';
import GoogleIcon from '../../assets/svgs/GoogleIcon';

type Props = {
  onPress: () => void;
  title: string;
  customViewStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  textSize?: number;
  loading?: boolean;
  disabled?: boolean;
  iconName?: string;
};

const OutlinedButton = ({
  customTextStyle,
  customViewStyle,
  onPress,
  title,
  textSize,
  loading,
  disabled,
  iconName,
}: Props) => {
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <View
        style={[
          styles.container,
          customViewStyle,
          {opacity: disabled ? 0.3 : 1},
        ]}>
        {loading ? (
          <ActivityIndicator
            color={appColors.white}
            size={textSize ? textSize : fontSize.small}
          />
        ) : (
          <>
            {iconName === 'facebook' && <FacebookIcon />}
            {iconName === 'google' && <GoogleIcon />}
            <CustomText
              fontSize={textSize ? textSize : fontSize.small}
              customStyle={customTextStyle}
              fontType="medium"
              color={appColors.onGradientPrimary}>
              {title}
            </CustomText>
          </>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: appColors.onGradientPrimary,
    ...universalStyle.centering,
    columnGap: sizeBlock.getWidthSize(10),
  },
});

export default OutlinedButton;
