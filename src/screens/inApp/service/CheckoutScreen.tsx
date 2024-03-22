import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {checkoutStyle} from '../../../styles/CheckoutStyle';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {CheckoutScreenProps} from '../../../types/navigation/SideNavigationType';
import CustomText from '../../../components/text/CustomText';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import OutlinedButton from '../../../components/button/OutlinedButton';
import GradientButton from '../../../components/button/GradientButton';
import {useState} from 'react';
import PostOrderPopup from '../../../components/popup/PostOrderPopup';
import {set} from 'react-hook-form';

const CheckoutScreen = ({navigation, route}: CheckoutScreenProps) => {
  const {params} = route;
  const {offerType} = params;
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <>
      <PostOrderPopup
        navigation={navigation}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
        route={route}
      />
      <SafeAreaView style={checkoutStyle.container}>
        <HeaderComponent title="Checkout" onPress={navigation.goBack} />

        <ScrollView style={checkoutStyle.content}>
          <View style={checkoutStyle.textContainer}>
            <CustomText color="green" fontSize={fontSize.primary}>
              {offerType}
            </CustomText>
          </View>

          <View style={checkoutStyle.textDivider}>
            <CustomText fontType="medium">Order Summary</CustomText>
            <CustomText
              fontSize={fontSize.primary}
              color={appColors.textPrimary}>
              Edit
            </CustomText>
          </View>

          <View style={checkoutStyle.summaryContainer}>
            <View style={checkoutStyle.summaryContent}>
              <CustomText fontSize={fontSize.primary}>Items(s) fee</CustomText>
              <CustomText fontType="medium" fontSize={fontSize.primary}>
                $3,450.00
              </CustomText>
            </View>
            <View style={checkoutStyle.summaryContent}>
              <CustomText fontSize={fontSize.primary}>VAT</CustomText>
              <CustomText fontType="medium" fontSize={fontSize.primary}>
                $15.00
              </CustomText>
            </View>
            <View style={checkoutStyle.summaryContent}>
              <CustomText fontSize={fontSize.primary}>Total</CustomText>
              <CustomText fontType="medium" fontSize={fontSize.primary}>
                $3,450.00
              </CustomText>
            </View>
          </View>

          <View style={checkoutStyle.textDivider}>
            <CustomText fontType="medium">Shipment Details</CustomText>
            <CustomText
              fontSize={fontSize.primary}
              color={appColors.textPrimary}>
              Edit
            </CustomText>
          </View>

          <CustomText fontSize={fontSize.primary} color={appColors.grey}>
            Shipment Quantity: 1/1
          </CustomText>

          <View style={checkoutStyle.shipmentContainer}>
            <CustomText fontSize={fontSize.primary}>
              Shipment between 15 Dec and 30 Dec
            </CustomText>

            <View style={checkoutStyle.shipmentContent}>
              <View style={checkoutStyle.shipment}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: appColors.onGradientPrimary,
                    borderRadius: borderRadius.small,
                  }}
                />
              </View>
              <View style={checkoutStyle.shipment}>
                <CustomText fontSize={fontSize.primary} fontType="medium">
                  Mercedes C300
                </CustomText>
                <CustomText
                  fontSize={fontSize.primary - 2}
                  color={appColors.gray}>
                  A large container holding 20 Mercedes C300 cars, securely
                  packed alongside miscellaneous items. The container
                </CustomText>
              </View>
            </View>

            <OutlinedButton title="Add to cart" onPress={() => {}} />
          </View>

          <View style={checkoutStyle.textDivider}>
            <CustomText fontType="medium">Drop-off Address</CustomText>
            <CustomText
              fontSize={fontSize.primary}
              color={appColors.textPrimary}>
              Edit
            </CustomText>
          </View>

          <View style={checkoutStyle.checkoutInfo}>
            <CustomText
              customStyle={{marginVertical: sizeBlock.getHeightSize(5)}}
              fontSize={fontSize.primary}
              fontType="medium">
              Xela Oladipupo
            </CustomText>
            <CustomText
              customStyle={{marginVertical: sizeBlock.getHeightSize(5)}}
              fontSize={fontSize.primary - 2}
              color={appColors.grey}>
              Ocean Drive, Miami Beach, Florida
            </CustomText>
            <CustomText
              customStyle={{marginVertical: sizeBlock.getHeightSize(5)}}
              fontSize={fontSize.primary - 2}
              color={appColors.grey}>
              +234 704 876 6211
            </CustomText>
          </View>

          <View style={checkoutStyle.textDivider}>
            <CustomText fontType="medium">Destination Address</CustomText>
            <CustomText
              fontSize={fontSize.primary}
              color={appColors.textPrimary}>
              Edit
            </CustomText>
          </View>

          <View style={checkoutStyle.checkoutInfo}>
            <CustomText
              customStyle={{marginVertical: sizeBlock.getHeightSize(5)}}
              fontSize={fontSize.primary}
              fontType="medium">
              Xela Oladipupo
            </CustomText>
            <CustomText
              customStyle={{marginVertical: sizeBlock.getHeightSize(5)}}
              fontSize={fontSize.primary - 2}
              color={appColors.grey}>
              Ocean Drive, Miami Beach, Florida
            </CustomText>
            <CustomText
              customStyle={{marginVertical: sizeBlock.getHeightSize(5)}}
              fontSize={fontSize.primary - 2}
              color={appColors.grey}>
              +234 704 876 6211
            </CustomText>
          </View>

          <GradientButton
            title="Post order"
            customViewStyle={{
              marginBottom: sizeBlock.getHeightSize(20),
            }}
            onPress={() => {
              setShowPopup(true);
            }}
            showArrow
          />

          <CustomText
            fontSize={fontSize.primary}
            color={appColors.gray}
            customStyle={{
              textAlign: 'center',
              marginBottom: sizeBlock.getHeightSize(20),
            }}>
            The shipping rates are calculated based on the category and also the
            weight of the items to be shipped
          </CustomText>

          <OutlinedButton
            title="Learn more"
            onPress={() => {}}
            customViewStyle={{
              marginBottom: sizeBlock.getHeightSize(50),
              width: sizeBlock.getWidthSize(200),
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CheckoutScreen;
