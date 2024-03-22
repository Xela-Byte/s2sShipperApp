import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const InactiveWalletIcon = (props: SvgProps) => (
  <Svg width={31} height={34} viewBox="0 0 31 34" fill="none" {...props}>
    <G clipPath="url(#clip0_27_1064)" filter="url(#filter0_d_27_1064)">
      <Path
        d="M21.75 10V6.25C21.75 5.91848 21.6183 5.60054 21.3839 5.36612C21.1495 5.1317 20.8315 5 20.5 5H8C7.33696 5 6.70107 5.26339 6.23223 5.73223C5.76339 6.20107 5.5 6.83696 5.5 7.5M5.5 7.5C5.5 8.16304 5.76339 8.79893 6.23223 9.26777C6.70107 9.73661 7.33696 10 8 10H23C23.3315 10 23.6495 10.1317 23.8839 10.3661C24.1183 10.6005 24.25 10.9185 24.25 11.25V15M5.5 7.5V22.5C5.5 23.163 5.76339 23.7989 6.23223 24.2678C6.70107 24.7366 7.33696 25 8 25H23C23.3315 25 23.6495 24.8683 23.8839 24.6339C24.1183 24.3995 24.25 24.0815 24.25 23.75V20"
        stroke="#CCCCCC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.5 15V20H20.5C19.837 20 19.2011 19.7366 18.7322 19.2678C18.2634 18.7989 18 18.163 18 17.5C18 16.837 18.2634 16.2011 18.7322 15.7322C19.2011 15.2634 19.837 15 20.5 15H25.5Z"
        stroke="#CCCCCC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_27_1064">
        <Rect width={30} height={30} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default InactiveWalletIcon;
