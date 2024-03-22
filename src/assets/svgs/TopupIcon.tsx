import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const TopupIcon = (props: SvgProps) => (
  <Svg width={60} height={60} viewBox="0 0 60 60" fill="none" {...props}>
    <Rect width={60} height={60} rx={25} fill="#0000FF" />
    <Path
      d="M25.625 30C25.625 31.1603 26.0859 32.2731 26.9064 33.0936C27.7269 33.9141 28.8397 34.375 30 34.375C31.1603 34.375 32.2731 33.9141 33.0936 33.0936C33.9141 32.2731 34.375 31.1603 34.375 30C34.375 28.8397 33.9141 27.7269 33.0936 26.9064C32.2731 26.0859 31.1603 25.625 30 25.625C28.8397 25.625 27.7269 26.0859 26.9064 26.9064C26.0859 27.7269 25.625 28.8397 25.625 30Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M35.1042 38.75H19.7917C19.0181 38.75 18.2763 38.4427 17.7293 37.8957C17.1823 37.3487 16.875 36.6069 16.875 35.8333V24.1667C16.875 23.3931 17.1823 22.6513 17.7293 22.1043C18.2763 21.5573 19.0181 21.25 19.7917 21.25H40.2083C40.9819 21.25 41.7237 21.5573 42.2707 22.1043C42.8177 22.6513 43.125 23.3931 43.125 24.1667V30M43.125 35.1042V42.3958M39.4792 38.75H46.7708"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M38.75 30H38.7646"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.25 30H21.2646"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default TopupIcon;
