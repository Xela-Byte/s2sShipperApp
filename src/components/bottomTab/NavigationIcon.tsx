import {View, Text} from 'react-native';
import CustomText from '../text/CustomText';
import {bottomTabLinks} from '../../utils/data/BottomTabLInk';

type Props = {
  route: string;
  isFocused: boolean;
};

const NavigationIcon = ({isFocused, route}: Props) => {
  const routeName = bottomTabLinks.find(link => {
    return route === link.linkText;
  });

  return (
    <View>
      {isFocused ? routeName?.activeLinkIcon : routeName?.inactiveLinkIcon}
    </View>
  );
};

export default NavigationIcon;
