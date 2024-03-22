import {View, Text, StyleSheet, Pressable} from 'react-native';
import {appColors, borderRadius, sizeBlock} from '../../styles/UniversalStyle';
import {universalStyle} from '../../styles/UniversalStyle';

type Props = {
  checked: boolean;
  onPress: () => void;
};

const CheckBoxComponent = ({checked, onPress}: Props) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          borderColor: checked ? appColors.onGradientPrimary : appColors.gray,
        },
      ]}
      onPress={onPress}>
      {checked && <View style={styles.circle} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizeBlock.getWidthSize(25),
    height: sizeBlock.getWidthSize(25),
    borderColor: appColors.gray,
    borderWidth: 2,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  circle: {
    width: sizeBlock.getWidthSize(15),
    height: sizeBlock.getWidthSize(15),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.onGradientPrimary,
  },
});

export default CheckBoxComponent;
