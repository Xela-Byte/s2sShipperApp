import * as React from 'react';
import Svg, {SvgProps, G, Rect, Path, Defs, ClipPath} from 'react-native-svg';

const PendingPackageIcon = (props: SvgProps) => (
  <Svg width={91} height={90} viewBox="0 0 91 90" fill="none" {...props}>
    <G filter="url(#filter0_d_438_4913)">
      <Rect x={10.5} y={10} width={70} height={70} rx={35} fill="#F9F9F9" />
      <G clipPath="url(#clip0_438_4913)">
        <Path
          d="M35.5 58.3333V55C35.5 52.3478 36.5536 49.8043 38.4289 47.9289C40.3043 46.0536 42.8478 45 45.5 45C48.1522 45 50.6957 46.0536 52.5711 47.9289C54.4464 49.8043 55.5 52.3478 55.5 55V58.3333C55.5 58.7754 55.3244 59.1993 55.0118 59.5118C54.6993 59.8244 54.2754 60 53.8333 60H37.1667C36.7246 60 36.3007 59.8244 35.9882 59.5118C35.6756 59.1993 35.5 58.7754 35.5 58.3333Z"
          stroke="#BDBFC1"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M35.5 31.6667V35C35.5 37.6522 36.5536 40.1957 38.4289 42.0711C40.3043 43.9464 42.8478 45 45.5 45C48.1522 45 50.6957 43.9464 52.5711 42.0711C54.4464 40.1957 55.5 37.6522 55.5 35V31.6667C55.5 31.2246 55.3244 30.8007 55.0118 30.4882C54.6993 30.1756 54.2754 30 53.8333 30H37.1667C36.7246 30 36.3007 30.1756 35.9882 30.4882C35.6756 30.8007 35.5 31.2246 35.5 31.6667Z"
          stroke="#BDBFC1"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_438_4913">
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
export default PendingPackageIcon;
