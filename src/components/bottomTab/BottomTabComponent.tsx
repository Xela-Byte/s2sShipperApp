import React, {useEffect, useState} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import AddIcon from 'react-native-vector-icons/AntDesign';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {
  appColors,
  borderRadius,
  fontSize,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import NavigationIcon from './NavigationIcon';

const BottomTabComponent = ({
  descriptors,
  navigation,
  state,
}: BottomTabBarProps) => {
  const blackListScreens = [
    'ReferScreen',
    'ReferDashboardScreen',
    'BonusWithdrawalScreen',
    'MessageScreen',
    'ShipperProfile',
  ];

  const [activeRouteName, setActiveRouteName] = useState<string | undefined>(
    '',
  );

  useEffect(() => {
    setActiveRouteName(getRouteName(state.routes[state.index]));
  }, [state]);

  const shouldDisplayTabBar =
    activeRouteName === undefined
      ? true
      : activeRouteName && !blackListScreens.includes(activeRouteName);

  return (
    <View
      style={[
        styles.container,
        {display: shouldDisplayTabBar ? 'flex' : 'none'},
      ]}>
      {state?.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const activeRoute = getRouteName(route);

        const onPress = () => {
          setActiveRouteName(activeRoute);

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            onPress={onPress}
            key={index}
            style={[
              styles.linkContainer,
              label === 'Chat' && {
                marginRight: sizeBlock.getWidthSize(50),
              },
            ]}>
            <NavigationIcon route={label} isFocused={isFocused} />
            <CustomText
              fontType="semiBold"
              fontSize={fontSize.primary}
              customStyle={{
                position: 'absolute',
                bottom: 0,
              }}
              color={isFocused ? appColors.textPrimary : appColors.grey}>
              {label}
            </CustomText>
          </Pressable>
        );
      })}

      <Pressable
        style={styles.addBtnContainer}
        onPress={() => {
          navigation.navigate('PostOrderScreen');
        }}>
        <AddIcon
          name="plus"
          color={appColors.white}
          size={fontSize.large - 10}
        />
      </Pressable>
    </View>
  );
};

const getRouteName = (route: any) => {
  return getFocusedRouteNameFromRoute(route);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    position: 'absolute',
    width: screenWidth + sizeBlock.getWidthSize(10),
    marginLeft: -sizeBlock.getWidthSize(5),
    height: sizeBlock.getHeightSize(80),
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    borderTopLeftRadius: borderRadius.medium + 10,
    borderTopRightRadius: borderRadius.medium + 10,
    ...universalStyle.spaceEvenly,
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  addBtnContainer: {
    width: sizeBlock.getWidthSize(70),
    height: sizeBlock.getWidthSize(70),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.onGradientPrimary,
    position: 'absolute',
    left:
      (screenWidth + sizeBlock.getWidthSize(10) - sizeBlock.getWidthSize(70)) /
      2,
    top: -sizeBlock.getWidthSize(30),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    ...universalStyle.centering,
  },
  linkContainer: {
    width: screenWidth * 0.25,
    height: sizeBlock.getHeightSize(70),
    ...universalStyle.centering,
    flexDirection: 'column',
    position: 'relative',
    marginBottom: sizeBlock.getHeightSize(10),
  },
});

export default BottomTabComponent;
