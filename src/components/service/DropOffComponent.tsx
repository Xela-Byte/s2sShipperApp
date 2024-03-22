import {View} from 'react-native';
import InfoIcon from 'react-native-vector-icons/AntDesign';
import PencilIcon from 'react-native-vector-icons/EvilIcons';
import GradientButton from '../../components/button/GradientButton';
import OutlinedButton from '../../components/button/OutlinedButton';
import CheckBoxComponent from '../../components/checkbox/CheckBoxComponent';
import CustomText from '../../components/text/CustomText';
import {postOrderStyle} from '../../styles/PostOrderStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {useState} from 'react';

type Props = {
  handleStep: () => void;
};

const DropOffComponent = ({handleStep}: Props) => {
  const [pickedDropOff, setPickedDropOff] = useState<boolean>(false);

  return (
    <>
      <CustomText
        customStyle={{
          marginVertical: sizeBlock.getHeightSize(30),
          marginLeft: sizeBlock.getWidthSize(10),
        }}
        fontSize={fontSize.medium - 3}
        fontType="medium">
        Select Drop-off Address
      </CustomText>
      <CustomText color={appColors.gray} fontSize={fontSize.primary}>
        Recent Drop-offs
      </CustomText>
      <View style={postOrderStyle.recentOrderContainer}>
        <CheckBoxComponent
          checked={pickedDropOff}
          onPress={() => {
            setPickedDropOff(!pickedDropOff);
          }}
        />
        <View>
          <CustomText fontType="medium" fontSize={fontSize.primary}>
            Xela Oladipupo
          </CustomText>
          <CustomText
            customStyle={{
              marginTop: sizeBlock.getHeightSize(10),
            }}
            fontSize={fontSize.primary - 2}
            color={appColors.gray}>
            Ocean Drive
          </CustomText>
          <CustomText fontSize={fontSize.primary - 2} color={appColors.gray}>
            Miami Beach, Florida
          </CustomText>
          <CustomText
            customStyle={{
              marginTop: sizeBlock.getHeightSize(10),
            }}
            fontSize={fontSize.primary - 2}
            color={appColors.gray}>
            +234 704 876 6211
          </CustomText>
        </View>

        <View style={postOrderStyle.recentEdit}>
          <PencilIcon
            name="pencil"
            size={fontSize.medium}
            color={appColors.onGradientPrimary}
          />
          <View
            style={{
              flexDirection: 'row',
              columnGap: sizeBlock.getWidthSize(5),
            }}>
            <InfoIcon name="infocirlceo" color={'green'} />
            <CustomText color={'green'} fontSize={fontSize.primary - 4}>
              Verified Address
            </CustomText>
          </View>
        </View>
      </View>
      <View style={postOrderStyle.recentOrderContainer}>
        <CheckBoxComponent
          checked={pickedDropOff}
          onPress={() => {
            setPickedDropOff(!pickedDropOff);
          }}
        />
        <View>
          <CustomText fontType="medium" fontSize={fontSize.primary}>
            Xela Oladipupo
          </CustomText>
          <CustomText
            customStyle={{
              marginTop: sizeBlock.getHeightSize(10),
            }}
            fontSize={fontSize.primary - 2}
            color={appColors.gray}>
            Ocean Drive
          </CustomText>
          <CustomText fontSize={fontSize.primary - 2} color={appColors.gray}>
            Miami Beach, Florida
          </CustomText>
          <CustomText
            customStyle={{
              marginTop: sizeBlock.getHeightSize(10),
            }}
            fontSize={fontSize.primary - 2}
            color={appColors.gray}>
            +234 704 876 6211
          </CustomText>
        </View>

        <View style={postOrderStyle.recentEdit}>
          <PencilIcon
            name="pencil"
            size={fontSize.medium}
            color={appColors.onGradientPrimary}
          />
          <View
            style={{
              flexDirection: 'row',
              columnGap: sizeBlock.getWidthSize(5),
            }}>
            <InfoIcon name="infocirlceo" color={'green'} />
            <CustomText color={'green'} fontSize={fontSize.primary - 4}>
              Verified Address
            </CustomText>
          </View>
        </View>
      </View>
      <OutlinedButton
        onPress={() => {}}
        customViewStyle={{
          marginTop: sizeBlock.getHeightSize(30),
        }}
        title="Add Address"
      />
      <GradientButton
        onPress={() => {
          handleStep();
        }}
        customViewStyle={{
          marginTop: sizeBlock.getHeightSize(30),
        }}
        title="Proceed"
      />
    </>
  );
};

export default DropOffComponent;
