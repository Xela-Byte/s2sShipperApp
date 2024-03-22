import {useEffect} from 'react';
import {BackHandler, Pressable, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MapIcon from '../../assets/svgs/MapIcon';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import {
  CheckoutScreenProps,
  HomeScreenProps,
} from '../../types/navigation/SideNavigationType';
import GradientButton from '../button/GradientButton';
import CustomText from '../text/CustomText';
import ConfettiIcon from '../../assets/svgs/ConfettiIcon';

type Props = {
  showPopup: boolean;
  setShowPopup: (value: boolean) => void;
};

const PostOrderPopup = ({
  navigation,
  setShowPopup,
  showPopup,
}: CheckoutScreenProps & Props) => {
  useEffect(() => {
    const handleBackButton = () => {
      if (showPopup === true) {
        setShowPopup(false);
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [showPopup]);
  return (
    <>
      {showPopup && (
        <Pressable
          style={styles.container}
          onPress={() => {
            setShowPopup(!showPopup);
          }}>
          <Animatable.View
            style={styles.content}
            duration={500}
            animation={'zoomIn'}>
            <ConfettiIcon />
            <CustomText fontType="medium" fontSize={fontSize.medium}>
              Congratulations!
            </CustomText>
            <CustomText
              customStyle={{
                textAlign: 'center',
                marginTop: sizeBlock.getHeightSize(20),
              }}
              fontSize={fontSize.primary}>
              Your post order was successfully published.
            </CustomText>

            <GradientButton
              customViewStyle={{
                width: screenWidth * 0.7,
                marginTop: sizeBlock.getHeightSize(20),
              }}
              title="Close"
              onPress={() => {
                setShowPopup(!showPopup);
                navigation.navigate('HomePage');
              }}
              showArrow
            />
          </Animatable.View>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 100,
    ...universalStyle.centering,
  },
  content: {
    width: '80%',
    backgroundColor: appColors.white,
    borderRadius: borderRadius.medium,
    ...universalStyle.centering,
    flexDirection: 'column',
    padding: sizeBlock.getWidthSize(20),
  },
});

export default PostOrderPopup;
