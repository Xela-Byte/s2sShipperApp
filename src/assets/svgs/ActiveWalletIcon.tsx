import * as React from 'react';
import Svg, {SvgProps, G, Rect, Path, Defs, ClipPath} from 'react-native-svg';
const ActiveWalletIcon = (props: SvgProps) => (
  <Svg width={31} height={30} viewBox="0 0 31 30" fill="none" {...props}>
    <G clipPath="url(#clip0_27_1393)">
      <Rect width={30} height={30} transform="translate(0.25)" fill="white" />
      <Path
        d="M21.5 10V6.25C21.5 5.91848 21.3683 5.60054 21.1339 5.36612C20.8995 5.1317 20.5815 5 20.25 5H7.75C7.08696 5 6.45107 5.26339 5.98223 5.73223C5.51339 6.20107 5.25 6.83696 5.25 7.5M5.25 7.5C5.25 8.16304 5.51339 8.79893 5.98223 9.26777C6.45107 9.73661 7.08696 10 7.75 10H22.75C23.0815 10 23.3995 10.1317 23.6339 10.3661C23.8683 10.6005 24 10.9185 24 11.25V15M5.25 7.5V22.5C5.25 23.163 5.51339 23.7989 5.98223 24.2678C6.45107 24.7366 7.08696 25 7.75 25H22.75C23.0815 25 23.3995 24.8683 23.6339 24.6339C23.8683 24.3995 24 24.0815 24 23.75V20"
        stroke="#D85169"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.25 15V20H20.25C19.587 20 18.9511 19.7366 18.4822 19.2678C18.0134 18.7989 17.75 18.163 17.75 17.5C17.75 16.837 18.0134 16.2011 18.4822 15.7322C18.9511 15.2634 19.587 15 20.25 15H25.25Z"
        fill="#D85169"
        stroke="#D85169"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_27_1393">
        <Rect width={30} height={30} fill="white" transform="translate(0.25)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ActiveWalletIcon;
