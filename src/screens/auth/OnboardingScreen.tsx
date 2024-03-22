import {View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import ArrowIcon from 'react-native-vector-icons/FontAwesome6';
import CustomText from '../../components/text/CustomText';
import {onboardingStyle} from '../../styles/OnboardingStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {OnboardingScreenProps} from '../../types/navigation/AuthNavigationType';
import {
  OnboardingDataType,
  onboardingData,
} from '../../utils/data/OnboardingData';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../stateManagement/store';
import {setFreshInstall} from '../../stateManagement/features/auth/authSlice';

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {
  const keyExtractor = (item: OnboardingDataType) => item.key;

  const dispatch = useDispatch<AppDispatch>();

  const onComplete = () => {
    dispatch(setFreshInstall());
    navigation.navigate('AuthScreen');
  };

  type Props = {
    item: OnboardingDataType;
  };

  const renderItem = ({item}: Props) => {
    return (
      <View style={onboardingStyle.container}>
        <FastImage
          source={item.image}
          resizeMode="contain"
          style={onboardingStyle.image}
        />
        <CustomText
          customStyle={{textAlign: 'center'}}
          fontSize={fontSize.medium - 3}
          fontType="medium">
          {item.title}
        </CustomText>
        <CustomText
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(20),
          }}>
          {item.subtitle}
        </CustomText>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <LinearGradient
        colors={[appColors.onGradientPrimary, appColors.grey]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 1]}
        style={[onboardingStyle.nextButton]}>
        <CustomText color={appColors.white}>Next</CustomText>
        <ArrowIcon
          name="arrow-right-long"
          size={fontSize.small}
          color={appColors.white}
        />
      </LinearGradient>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={onboardingStyle.skipButton}>
        <CustomText color={appColors.onGradientPrimary}>Skip</CustomText>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={[appColors.onGradientPrimary, appColors.grey]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 1]}
        style={[onboardingStyle.doneButton]}>
        <CustomText color={appColors.white}>Get started</CustomText>
        <ArrowIcon
          name="arrow-right-long"
          size={fontSize.small}
          color={appColors.white}
        />
      </LinearGradient>
    );
  };

  return (
    <AppIntroSlider
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      dotStyle={onboardingStyle.dotStyle}
      activeDotStyle={onboardingStyle.activeDotStyle}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      renderNextButton={renderNextButton}
      bottomButton
      showSkipButton
      data={onboardingData}
      onDone={() => onComplete()}
    />
  );
};

export default OnboardingScreen;
