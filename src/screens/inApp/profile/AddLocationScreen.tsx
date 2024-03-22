import {View, Text, SafeAreaView} from 'react-native';
import {addLocationStyle} from '../../../styles/AddLocationStyle';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {AddLocationScreenProps} from '../../../types/navigation/SideNavigationType';
import GradientShadow from '../../../components/background/GradientShadow';
import FastImage from 'react-native-fast-image';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../components/input/CustomInput';
import {
  appColors,
  screenWidth,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {useState} from 'react';
import GradientButton from '../../../components/button/GradientButton';

type FormValues = {
  country: string;
  city: string;
  postalCode: number;
};

const AddLocationScreen = ({navigation}: AddLocationScreenProps) => {
  const {control, handleSubmit} = useForm<FormValues>();
  const [showShadow, setShowShadow] = useState<boolean>(true);

  const removeShadow = () => {
    setShowShadow(false);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    navigation.goBack();
  };
  return (
    <SafeAreaView style={addLocationStyle.container}>
      <HeaderComponent
        onPress={() => {
          navigation.goBack();
        }}
        title="Add location"
      />

      {showShadow && (
        <>
          <GradientShadow
            customViewStyle={addLocationStyle.highlight1}
            scale={1.5}
          />
          <GradientShadow
            customViewStyle={addLocationStyle.highlight2}
            scale={2.5}
          />
        </>
      )}

      <View style={addLocationStyle.content}>
        <FastImage
          source={require('../../../assets/logos/s2sBrown.png')}
          style={addLocationStyle.logo}
        />

        <CustomInput
          onFocus={() => {
            removeShadow();
          }}
          inputProps={{
            onSubmitEditing: () => {
              setShowShadow(true);
            },
          }}
          control={control}
          name="country"
          placeholder="Country"
          rules={{
            required: 'Please input your country',
          }}
        />
        <CustomInput
          onFocus={() => {
            removeShadow();
          }}
          inputProps={{
            onSubmitEditing: () => {
              setShowShadow(true);
            },
          }}
          control={control}
          name="city"
          placeholder="City"
          rules={{
            required: 'Please input your city',
          }}
        />
        <CustomInput
          onFocus={() => {
            removeShadow();
          }}
          keyboardType="numeric"
          inputProps={{
            onSubmitEditing: () => {
              setShowShadow(true);
            },
          }}
          control={control}
          name="postalCode"
          placeholder="Postal Code"
          rules={{
            required: 'Please input your postal code',
          }}
        />

        <GradientButton
          customViewStyle={{
            width: screenWidth * 0.9,
            marginTop: sizeBlock.getHeightSize(30),
          }}
          title="Add location"
          onPress={handleSubmit(onSubmit)}
          showArrow
        />
      </View>
    </SafeAreaView>
  );
};

export default AddLocationScreen;
