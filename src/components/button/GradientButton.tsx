import {Pressable, StyleSheet, TextStyle, ViewStyle} from 'react-native';
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
import ArrowIcon from 'react-native-vector-icons/FontAwesome6';

type Props = {
  onPress: () => void;
  title: string;
  customViewStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  textSize?: number;
  loading?: boolean;
  disabled?: boolean;
  auth?: boolean;
  showArrow?: boolean;
};

const GradientButton = ({
  customTextStyle,
  customViewStyle,
  onPress,
  title,
  textSize,
  loading,
  disabled,
  auth,
  showArrow,
}: Props) => {
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <LinearGradient
        colors={[appColors.onGradientPrimary, appColors.grey]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 1]}
        style={[
          styles.container,
          customViewStyle,
          {opacity: disabled ? 0.5 : 1},
        ]}>
        {loading ? (
          <ActivityIndicator
            color={appColors.white}
            size={textSize ? textSize : fontSize.small}
          />
        ) : (
          <>
            <CustomText
              fontSize={textSize ? textSize : fontSize.small}
              customStyle={customTextStyle}
              fontType="medium"
              color={appColors.white}>
              {title}
            </CustomText>
            {!showArrow && (
              <ArrowIcon
                name={!auth ? 'arrow-right-long' : 'arrow-right-from-bracket'}
                size={fontSize.small}
                color={appColors.white}
              />
            )}
          </>
        )}
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    columnGap: sizeBlock.getWidthSize(10),
    ...universalStyle.centering,
  },
});

export default GradientButton;
