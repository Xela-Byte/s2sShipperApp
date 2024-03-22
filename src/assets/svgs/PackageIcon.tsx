import * as React from 'react';
import Svg, {SvgProps, G, Rect, Path, Defs, ClipPath} from 'react-native-svg';

const PackageIcon = (props: SvgProps) => (
  <Svg
    width={91}
    height={90}
    viewBox="0 0 91 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_438_4925)">
      <Rect x={10.5} y={10} width={70} height={70} rx={35} fill="#F9F9F9" />
      <G clipPath="url(#clip0_438_4925)">
        <Path
          d="M45.5 30L58.8333 37.5V52.5L45.5 60L32.1666 52.5V37.5L45.5 30Z"
          stroke="#BDBFC1"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M45.5 45L58.8333 37.5"
          stroke="#BDBFC1"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M45.5 45V60"
          stroke="#BDBFC1"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M45.5 45L32.1666 37.5"
          stroke="#BDBFC1"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M52.1667 33.75L38.8334 41.25"
          stroke="#BDBFC1"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_438_4925">
        <Rect
          width={40}
          height={40}
          fill="white"
          transform="translate(25.5 25)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PackageIcon;
