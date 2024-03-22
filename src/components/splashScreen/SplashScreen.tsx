import React, {useEffect, useRef, useState} from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import {
  appColors,
  borderRadius,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import RadialBackground from '../background/RadialBackground';
import LoadingSplashScreen from './LoadingSplashScreen';

export function WithSplashScreen({
  children,
  isAppReady,
}: {
  isAppReady: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      {isAppReady ? children : null}
      <Splash isAppReady={isAppReady} />
    </>
  );
}

const WAIT_FOR_APP_TO_BE_READY = 'Wait for app to be ready';
const FADE_OUT = 'Fade out';
const HIDDEN = 'Hidden';

export const Splash = ({isAppReady}: {isAppReady: boolean}) => {
  const containerOpacity = useRef(new Animated.Value(1)).current;

  const [state, setState] = useState<
    typeof WAIT_FOR_APP_TO_BE_READY | typeof FADE_OUT | typeof HIDDEN
  >(WAIT_FOR_APP_TO_BE_READY);

  const [isSplashScreenDone, setIsSplashScreenDone] = useState<boolean>(false);

  useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setState(FADE_OUT);
      }
    }
  }, [isAppReady, state]);

  useEffect(() => {
    if (state === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 1000, // Fade out duration
        delay: 1000, // Minimum time the logo will stay visible
        useNativeDriver: true,
      }).start(() => {
        setState(HIDDEN);
      });
    }
  }, [containerOpacity, state]);

  setTimeout(() => {
    if (state === HIDDEN) return null;
  }, 1000);

  const onAnimationDone = () => {
    setTimeout(() => {
      setIsSplashScreenDone(!isSplashScreenDone);
    }, 500);
  };

  return (
    <Animated.View
      collapsable={false}
      style={[
        style.container,
        {
          opacity: containerOpacity,
          display: state === HIDDEN ? 'none' : 'flex',
        },
      ]}>
      {!isSplashScreenDone ? (
        <RadialBackground customViewStyle={style.subContainer}>
          <Animatable.View
            style={style.imageContainer}
            duration={1000}
            animation={'zoomIn'}
            onAnimationEnd={() => {
              onAnimationDone();
            }}>
            <FastImage
              source={require('../../assets/images/s2s.png')}
              style={style.image}
              resizeMode="contain"
            />
          </Animatable.View>
          <Image
            source={require('../../assets/images/s2sBigTP.png')}
            resizeMode="contain"
            style={style.BGImage}
          />
        </RadialBackground>
      ) : (
        <LoadingSplashScreen />
      )}
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  subContainer: {
    width: screenWidth,
    ...universalStyle.centering,
    height: screenHeight,
  },
  imageContainer: {
    width: screenWidth / 2.5,
    height: screenWidth / 2.5,
    borderRadius: borderRadius.full,
    backgroundColor: appColors.white,
    padding: sizeBlock.getWidthSize(10),
    ...universalStyle.centering,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '65%',
  },
  BGImage: {
    position: 'absolute',
    width: screenWidth,
    bottom: -screenWidth * 0.2,
    left: 0,
  },
});
