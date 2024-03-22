import {StatusBar, ViewStyle} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {
  appColors,
  screenHeight,
  screenWidth,
} from '../../styles/UniversalStyle';

type Props = {
  children: React.ReactNode;
  customViewStyle?: ViewStyle;
};

const RadialBackground = ({children, customViewStyle}: Props) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />

      <RadialGradient
        style={[{width: screenWidth, height: screenHeight}, customViewStyle]}
        colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
        stops={[0.1, 0.4]}
        center={[screenWidth / 2, screenHeight / 2]}
        radius={screenHeight}>
        {children}
      </RadialGradient>
    </>
  );
};

export default RadialBackground;
