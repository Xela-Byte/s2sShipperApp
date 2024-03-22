import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';

const MenuIcon = (props: SvgProps) => (
  <Svg width={30} height={24} viewBox="0 0 30 24" fill="none" {...props}>
    <G filter="url(#filter0_d_34_2254)">
      <Path
        d="M5 1.5H25"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 9H25"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 16.5H17"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default MenuIcon;
