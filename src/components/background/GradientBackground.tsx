import LinearGradient from 'react-native-linear-gradient';
import {
  appColors,
  screenHeight,
  screenWidth,
  sizeBlock,
} from '../../styles/UniversalStyle';
import {StatusBar, ViewStyle} from 'react-native';

type Props = {
  children: React.ReactNode;
  customViewStyle?: ViewStyle;
};

const GradientBackground = ({children, customViewStyle}: Props) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />

      <LinearGradient
        colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 0.95]}
        style={[
          {
            width: screenWidth,
            height: screenHeight,
            position: 'absolute',
            paddingHorizontal: sizeBlock.getHeightSize(20),
          },
          customViewStyle,
        ]}>
        {children}
      </LinearGradient>
    </>
  );
};

export default GradientBackground;
