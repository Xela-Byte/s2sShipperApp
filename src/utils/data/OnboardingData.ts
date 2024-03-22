import { nanoid } from '@reduxjs/toolkit';

export interface OnboardingDataType {
  key: string;
  title: string;
  subtitle: string;
  image: any;
}

export const onboardingData: OnboardingDataType[] = [
  {
    key: nanoid(),
    subtitle:
      'Streamline, Simplify, and Supercharge your shipping operations with our cutting-edge app.',
    title: 'Welcome to the future of shipping with S2S',
    image: require('../../assets/images/OnboardingOne.jpg'),
  },
  {
    key: nanoid(),
    subtitle: 'Say goodbye to shipping hassles and hello to efficiency; ',
    title: 'Revolutionize your shipping experience',
    image: require('../../assets/images/OnboardingTwo.png'),
  },
  {
    key: nanoid(),
    subtitle:
      'Explore the goodness that comes with seamless shipping process with just a click',
    title: 'Let’s get you started now',
    image: require('../../assets/images/OnboardingThree.png'),
  },
];
