import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Pressable, ScrollView, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import DatePicker, {
  getFormatedDate,
  getToday,
} from 'react-native-modern-datepicker';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import {postOrderStyle} from '../../styles/PostOrderStyle';
import {
  appColors,
  borderRadius,
  fontFamily,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CustomInput from '../input/CustomInput';
import CustomText from '../text/CustomText';
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import OutlinedButton from '../button/OutlinedButton';
import GradientButton from '../button/GradientButton';
import OfferTypeComponent from './OfferTypeComponent';

type Props = {
  handleStep: () => void;
};

type FormValues = {
  itemName: string;
  description: string;
  weight: string;
  length: string;
  width: string;
  height: string;
};

interface Category {
  key: string;
  value: string;
}

const ShippedItemComponent = (props: Props) => {
  const {control} = useForm<FormValues>();
  const [category, setCategory] = useState<string>('');
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

  const data: Category[] = [
    {
      key: 'lip',
      value: 'LIp',
    },
    {
      key: 'lock',
      value: 'lock',
    },
  ];

  const todayDate = getToday();

  return (
    <>
      <ScrollView style={{height: screenHeight * 0.75}}>
        <CustomText
          customStyle={{
            marginVertical: sizeBlock.getHeightSize(30),
            marginLeft: sizeBlock.getWidthSize(10),
            textAlign: 'center',
          }}
          fontSize={fontSize.medium - 3}
          fontType="medium">
          Item(s) Being Shipped
        </CustomText>

        <CustomInput
          name="itemName"
          control={control}
          placeholder="Item Name"
        />
        <CustomInput
          name="description"
          control={control}
          placeholder="Description"
          mutliline
        />
        <CustomInput
          name="weight"
          control={control}
          placeholder="Weight of Total Package(KG)"
        />
        <View style={postOrderStyle.dimensionContainer}>
          <CustomInput
            name="length"
            customStyle={{
              width: '48%',
            }}
            control={control}
            placeholder="Length(cm)"
            keyboardType="numeric"
          />
          <CustomInput
            name="width"
            customStyle={{
              width: '48%',
            }}
            control={control}
            placeholder="Width(cm)"
            keyboardType="numeric"
          />
        </View>
        <CustomInput
          name="height"
          customStyle={{
            width: '48%',
          }}
          control={control}
          placeholder="Height(cm)"
          keyboardType="numeric"
        />
        <SelectList
          defaultOption={data[0]}
          search={false}
          boxStyles={{
            backgroundColor: appColors.lightGray,
            borderWidth: 0,
            marginVertical: sizeBlock.getHeightSize(10),
            borderRadius: borderRadius.full,
          }}
          setSelected={(val: string) => setCategory(val)}
          data={data}
          fontFamily={fontFamily.regular}
          dropdownStyles={{
            borderWidth: 0,
          }}
          dropdownItemStyles={{
            backgroundColor: appColors.grey,
            marginVertical: sizeBlock.getHeightSize(5),
            height: sizeBlock.getHeightSize(40),
            paddingTop: sizeBlock.getHeightSize(10),
            borderRadius: borderRadius.full,
          }}
          dropdownTextStyles={{
            color: appColors.black,
          }}
          inputStyles={{
            color: appColors.black,
          }}
          save="value"
          placeholder="Category"
          arrowicon={
            <ArrowIcon
              name="chevron-thin-down"
              size={fontSize.small}
              color={appColors.gray}
            />
          }
          closeicon={
            <ArrowIcon
              name="chevron-thin-up"
              size={fontSize.small}
              color={appColors.gray}
            />
          }
        />
        <Pressable
          style={postOrderStyle.datePicker}
          onPress={() => {
            setDatePickerOpen(!datePickerOpen);
          }}>
          <CustomText fontSize={fontSize.primary}>
            {selectedDate ? selectedDate : 'Priority Date'}
          </CustomText>
          <CalendarIcon
            name="calendar"
            size={fontSize.small}
            color={appColors.black}
          />
        </Pressable>

        <Animatable.View
          transition={['height', 'opacity']}
          style={{
            height: datePickerOpen ? sizeBlock.getHeightSize(350) : 1,
            opacity: datePickerOpen ? 1 : 0,
          }}>
          <DatePicker
            mode="calendar"
            onSelectedChange={(date: string) => {
              setSelectedDate(date);
              setDatePickerOpen(!datePickerOpen);
            }}
            options={{
              mainColor: appColors.onGradientPrimary,
              defaultFont: fontFamily.regular,
              headerFont: fontFamily.medium,
            }}
            style={{
              borderRadius: borderRadius.medium,
            }}
            minimumDate={todayDate}
          />
        </Animatable.View>

        <OutlinedButton
          title="Preview"
          customViewStyle={{
            marginVertical: sizeBlock.getHeightSize(10),
          }}
          onPress={() => {}}
        />
        <GradientButton
          title="Ship now"
          customViewStyle={{
            marginVertical: sizeBlock.getHeightSize(10),
          }}
          onPress={() => {
            setShowBottomSheet(!showBottomSheet);
          }}
          showArrow
        />
      </ScrollView>
      <OfferTypeComponent
        setShowBottomSheet={setShowBottomSheet}
        showBottomSheet={showBottomSheet}
      />
    </>
  );
};

export default ShippedItemComponent;
