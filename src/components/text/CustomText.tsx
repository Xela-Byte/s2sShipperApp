import {ColorValue, StyleProp, Text, TextStyle} from 'react-native';
import {
  appColors,
  fontFamily,
  fontSize as fontSizes,
} from '../../styles/UniversalStyle';

type Props = {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  customStyle?: StyleProp<TextStyle>;
  numLine?: number | undefined;
  fontType?: keyof typeof fontFamily;
};

const CustomText = ({
  children,
  color,
  fontSize,
  customStyle,
  numLine,
  fontType,
}: Props) => {
  return (
    <Text
      numberOfLines={numLine}
      ellipsizeMode="tail"
      style={[
        customStyle,
        {
          color: color ? color : appColors.black,
          fontSize: fontSize ? fontSize : fontSizes.small,
          fontFamily: fontType ? fontFamily[fontType] : fontFamily.regular,
        },
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
