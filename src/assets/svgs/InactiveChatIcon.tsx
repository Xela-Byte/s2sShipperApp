import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const InactiveChatIcon = (props: SvgProps) => (
  <Svg width={31} height={30} viewBox="0 0 31 30" fill="none" {...props}>
    <G clipPath="url(#clip0_27_1050)">
      <Path
        d="M26.75 17.5L23 13.75H14.25C13.9185 13.75 13.6005 13.6183 13.3661 13.3839C13.1317 13.1495 13 12.8315 13 12.5V5C13 4.66848 13.1317 4.35054 13.3661 4.11612C13.6005 3.8817 13.9185 3.75 14.25 3.75H25.5C25.8315 3.75 26.1495 3.8817 26.3839 4.11612C26.6183 4.35054 26.75 4.66848 26.75 5V17.5Z"
        stroke="#CCCCCC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 18.75V21.25C18 21.5815 17.8683 21.8995 17.6339 22.1339C17.3995 22.3683 17.0815 22.5 16.75 22.5H8L4.25 26.25V13.75C4.25 13.4185 4.3817 13.1005 4.61612 12.8661C4.85054 12.6317 5.16848 12.5 5.5 12.5H8"
        stroke="#CCCCCC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_27_1050">
        <Rect width={30} height={30} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default InactiveChatIcon;
