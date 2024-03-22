import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const MapIcon = (props: SvgProps) => (
  <Svg width={120} height={120} viewBox="0 0 120 120" fill="none" {...props}>
    <G clipPath="url(#clip0_438_6243)">
      <Path
        d="M104.86 56.4574C104.159 47.5976 100.851 39.1436 95.3519 32.1617C89.8529 25.1797 82.4096 19.9824 73.9607 17.2252C65.5117 14.468 56.4355 14.2744 47.8767 16.6687C39.3178 19.0631 31.6596 23.9382 25.8678 30.6792C20.0761 37.4203 16.4101 45.7255 15.3322 54.5473C14.2543 63.3692 15.8129 72.3126 19.8112 80.2499C23.8096 88.1871 30.0687 94.7627 37.7993 99.1473C45.5299 103.532 54.3857 105.529 63.25 104.887"
        stroke="#D85169"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.0078 45H102.008"
        stroke="#D85169"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.0078 75H62.5078"
        stroke="#D85169"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M57.4984 15C49.0751 28.4981 44.6094 44.0893 44.6094 60C44.6094 75.9107 49.0751 91.5019 57.4984 105"
        stroke="#D85169"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M62.5 15C70.9434 28.5224 75.4103 44.1481 75.39 60.09"
        stroke="#D85169"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M105.605 100.603C107.703 98.5057 109.132 95.833 109.711 92.9231C110.291 90.0133 109.994 86.9971 108.859 84.2559C107.723 81.5148 105.801 79.1718 103.334 77.5234C100.867 75.875 97.9669 74.9951 95 74.9951C92.0331 74.9951 89.1328 75.875 86.666 77.5234C84.1991 79.1718 82.2766 81.5148 81.1414 84.2559C80.0062 86.9971 79.7094 90.0133 80.2886 92.9231C80.8677 95.833 82.2968 98.5057 84.395 100.603C86.485 102.698 90.02 105.828 95 109.998C100.255 105.548 103.795 102.418 105.605 100.603Z"
        stroke="#D85169"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M95 90V90.05"
        stroke="#D85169"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_438_6243">
        <Rect width={120} height={120} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MapIcon;
