import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const DiamondIcon = (props: SvgProps) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
    <G clipPath="url(#clip0_438_4950)">
      <Path
        d="M4.5 4.25H13.5L15.75 8L9.375 15.125C9.32612 15.1749 9.26777 15.2145 9.20338 15.2416C9.13899 15.2686 9.06985 15.2826 9 15.2826C8.93015 15.2826 8.86101 15.2686 8.79662 15.2416C8.73223 15.2145 8.67388 15.1749 8.625 15.125L2.25 8L4.5 4.25Z"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 9.50059L6 7.85059L6.45 7.10059"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_438_4950">
        <Rect
          width={18}
          height={18}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DiamondIcon;
