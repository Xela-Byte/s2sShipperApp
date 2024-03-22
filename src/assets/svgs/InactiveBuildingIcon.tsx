import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const InactiveBuildingIcon = (props: SvgProps) => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
    <G clipPath="url(#clip0_27_1373)">
      <Path
        d="M23.7516 10.8872L17.0853 5.70221C16.5003 5.2471 15.7803 5 15.0391 5C14.2979 5 13.5778 5.2471 12.9928 5.70221L6.32531 10.8872C5.92462 11.1988 5.60043 11.5979 5.37751 12.0539C5.15458 12.5099 5.03882 13.0109 5.03906 13.5185V22.5185C5.03906 23.1815 5.30245 23.8174 5.7713 24.2862C6.24014 24.7551 6.87602 25.0185 7.53906 25.0185H22.5391C23.2021 25.0185 23.838 24.7551 24.3068 24.2862C24.7757 23.8174 25.0391 23.1815 25.0391 22.5185V13.5185C25.0391 12.4897 24.5641 11.5185 23.7516 10.8872Z"
        stroke="#CCCCCC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 18.75C17.2375 20.4162 12.76 20.4162 10 18.75"
        stroke="#CCCCCC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_27_1373">
        <Rect width={30} height={30} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default InactiveBuildingIcon;
