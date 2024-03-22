import React, {useEffect, useState} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Logo from '../../assets/images/s2s.png';
import {
  appColors,
  borderRadius,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';

type Props = {};

const LoadingSplashScreen = (props: Props) => {
  const [isAnimationReady, setIsAnimationReady] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimationReady(true);
  }, [isAnimationReady]);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={appColors.lightGrey}
        barStyle={'dark-content'}
      />
      <Animatable.View
        duration={1000}
        style={styles.content}
        animation={'fadeIn'}>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
        <Image
          source={require('../../assets/images/s2sTP.png')}
          style={styles.subLogo}
          resizeMode="contain"
        />
        <View style={styles.progressContainer}>
          <Animatable.View
            transition={'width'}
            duration={3000}
            style={[
              styles.progressbar,
              {
                width: isAnimationReady ? '100%' : '25%',
              },
            ]}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: appColors.lightGrey,
    ...universalStyle.centering,
  },
  content: {
    width: '100%',
    ...universalStyle.centering,
    flexDirection: 'column',
  },
  logo: {
    width: screenWidth / 2.5,
    height: screenWidth / 2.5,
  },
  subLogo: {
    width: screenWidth / 1.5,
    marginTop: -screenHeight * 0.1,
  },
  progressContainer: {
    width: '50%',
    height: sizeBlock.getHeightSize(10),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.small,
    marginTop: -screenHeight * 0.05,
  },
  progressbar: {
    width: '25%',
    height: '100%',
    borderRadius: borderRadius.small,
    backgroundColor: appColors.onGradientPrimary,
  },
});

export default LoadingSplashScreen;
