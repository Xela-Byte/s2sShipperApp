import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import GradientButton from '../button/GradientButton';
import OutlinedButton from '../button/OutlinedButton';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerStackParamList,
  PostOrderScreenProps,
} from '../../types/navigation/SideNavigationType';

type Props = {
  showBottomSheet: boolean;
  setShowBottomSheet: (value: boolean) => void;
};

const OfferTypeComponent = ({setShowBottomSheet, showBottomSheet}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '75%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

    if (index === -1) {
      setShowBottomSheet(!showBottomSheet);
    }
  }, []);

  const navigation = useNavigation<any>();

  return (
    <>
      {showBottomSheet && (
        <View style={styles.container}>
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={{
              borderRadius: borderRadius.medium + 10,
            }}
            handleComponent={() => {
              return (
                <View
                  style={{
                    width: sizeBlock.getWidthSize(100),
                    height: sizeBlock.getHeightSize(10),
                    backgroundColor: appColors.lightGray,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: sizeBlock.getHeightSize(10),
                    borderRadius: borderRadius.full,
                  }}
                />
              );
            }}
            enablePanDownToClose
            onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>
              <CustomText
                customStyle={{textAlign: 'center'}}
                fontSize={fontSize.primary}>
                We’re excited to process your shipment! To enhance your
                experience, we offer two efficient shipping methods:{' '}
                <CustomText
                  color={appColors.onGradientPrimary}
                  fontType="medium"
                  fontSize={fontSize.primary}>
                  Standard
                </CustomText>{' '}
                &{' '}
                <CustomText
                  fontType="medium"
                  color={appColors.onGradientPrimary}
                  fontSize={fontSize.primary}>
                  Express.
                </CustomText>
              </CustomText>

              <View style={styles.contentDivider}>
                <CustomText
                  fontType="medium"
                  color={appColors.onGradientPrimary}
                  fontSize={fontSize.primary}>
                  Standard Offer
                </CustomText>
              </View>

              <CustomText
                customStyle={{marginTop: sizeBlock.getHeightSize(15)}}
                fontSize={fontSize.primary}>
                Cost-effective and reliable, our standard shipping method
                ensures your package reaches you securely within the estimated
                timefranme. Perfect for those who priotize budget-friendly
                delivery woithout compromising reliability.
              </CustomText>

              <View style={styles.contentDivider}>
                <CustomText
                  fontType="medium"
                  color={appColors.onGradientPrimary}
                  fontSize={fontSize.primary}>
                  Express Offer
                </CustomText>
              </View>

              <OutlinedButton
                title="Standard"
                customViewStyle={{
                  marginVertical: sizeBlock.getHeightSize(20),
                }}
                onPress={() => {
                  navigation.navigate('CheckoutScreen', {
                    offerType: 'Standard',
                  });
                }}
              />
              <GradientButton
                title="Express"
                onPress={() => {
                  navigation.navigate('CheckoutScreen', {
                    offerType: 'Express',
                  });
                }}
                showArrow
              />
            </View>
          </BottomSheet>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
  },
  contentContainer: {
    padding: sizeBlock.getWidthSize(20),
  },
  contentDivider: {
    paddingTop: sizeBlock.getHeightSize(25),
  },
});

export default OfferTypeComponent;
