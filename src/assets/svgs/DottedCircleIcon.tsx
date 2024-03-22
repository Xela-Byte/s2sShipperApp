import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const DottedCircleIcon = (props: SvgProps) => (
  <Svg width={45} height={41} viewBox="0 0 45 41" fill="none" {...props}>
    <G clipPath="url(#clip0_441_2646)">
      <Path
        d="M18.7491 36.956C17.1171 36.5859 15.5498 35.9735 14.0991 35.1392"
        stroke="#BDBFC1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.25 4.04248C29.9778 4.89386 33.3061 6.98565 35.69 9.97537C38.0739 12.9651 39.3721 16.6756 39.3721 20.4994C39.3721 24.3231 38.0739 28.0336 35.69 31.0233C33.3061 34.0131 29.9778 36.1048 26.25 36.9562"
        stroke="#BDBFC1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5848 30.0495C7.562 28.5635 6.78518 26.9225 6.28418 25.1895"
        stroke="#BDBFC1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.85938 17.6866C6.15937 15.9054 6.73688 14.2179 7.54688 12.671L7.86375 12.0991"
        stroke="#BDBFC1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9492 6.58498C14.7036 5.37729 16.6717 4.51445 18.7486 4.04248"
        stroke="#BDBFC1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.875 20.5L20.625 24.25L28.125 16.75"
        stroke="#BDBFC1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_441_2646">
        <Rect width={45} height={45} fill="white" transform="translate(0 -2)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DottedCircleIcon;
