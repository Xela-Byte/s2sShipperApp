import {useEffect, useState} from 'react';
import {BackHandler, SafeAreaView, View} from 'react-native';
import GradientShadow from '../../../components/background/GradientShadow';
import HeaderComponent from '../../../components/header/HeaderComponent';
import DestinationComponent from '../../../components/service/DestinationComponent';
import DropOffComponent from '../../../components/service/DropOffComponent';
import ShippedItemComponent from '../../../components/service/ShippedItemComponent';
import {postOrderStyle} from '../../../styles/PostOrderStyle';
import {PostOrderScreenProps} from '../../../types/navigation/SideNavigationType';
import OrderProgressComponent from '../../../components/service/OrderProgressComponent';

const PostOrderScreen = ({navigation}: PostOrderScreenProps) => {
  const [step, setStep] = useState<number>(0);

  const handleStepIncrease = () => {
    if (step < 3) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const handleStepDecrease = () => {
    if (step > 0) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const handleNavigation = () => {
    step > 0 ? handleStepDecrease() : navigation.goBack();
  };

  useEffect(() => {
    const handleBackButton = () => {
      navigation.goBack();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [step]);

  return (
    <SafeAreaView style={postOrderStyle.container}>
      <HeaderComponent
        title="Post order"
        onPress={() => {
          handleNavigation();
        }}
      />
      <View style={postOrderStyle.content}>
        <View style={postOrderStyle.progressContainer}>
          <View style={postOrderStyle.progressLine} />
          <OrderProgressComponent key={step} step={step} />
        </View>

        {step === 0 && <DropOffComponent handleStep={handleStepIncrease} />}
        {step === 1 && <DestinationComponent handleStep={handleStepIncrease} />}
        {step === 2 && <ShippedItemComponent handleStep={handleStepIncrease} />}

        <GradientShadow
          customViewStyle={postOrderStyle.highlight}
          scale={2.5}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostOrderScreen;
