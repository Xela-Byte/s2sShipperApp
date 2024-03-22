import {ViewStyle} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {
  appColors,
  screenHeight,
  screenWidth,
} from '../../styles/UniversalStyle';

type Props = {
  customViewStyle?: ViewStyle;
  scale?: number;
};

const GradientShadow = ({customViewStyle, scale = 1}: Props) => {
  return (
    <RadialGradient
      style={[
        {
          width: (screenWidth / 2) * scale,
          height: (screenHeight / 4) * scale,
          opacity: 0.4,
        },
        customViewStyle,
      ]}
      colors={[appColors.onGradientPrimary, appColors.white]}
      stops={[0.1, 0.5]}
      center={[(screenWidth / 4) * scale, (screenHeight / 8) * scale]}
      radius={(screenHeight / 5) * scale}
    />
  );
};

export default GradientShadow;
