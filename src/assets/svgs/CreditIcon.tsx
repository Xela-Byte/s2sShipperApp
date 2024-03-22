import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const CreditIcon = (props: SvgProps) => (
  <Svg width={35} height={35} viewBox="0 0 35 35" fill="none" {...props}>
    <Rect width={35} height={35} rx={17.5} fill="#0000FF" />
    <Path
      d="M15 17.5C15 18.163 15.2634 18.7989 15.7322 19.2678C16.2011 19.7366 16.837 20 17.5 20C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5C20 16.837 19.7366 16.2011 19.2678 15.7322C18.7989 15.2634 18.163 15 17.5 15C16.837 15 16.2011 15.2634 15.7322 15.7322C15.2634 16.2011 15 16.837 15 17.5Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.4167 22.5H11.6667C11.2246 22.5 10.8007 22.3244 10.4882 22.0118C10.1756 21.6993 10 21.2754 10 20.8333V14.1667C10 13.7246 10.1756 13.3007 10.4882 12.9882C10.8007 12.6756 11.2246 12.5 11.6667 12.5H23.3333C23.7754 12.5 24.1993 12.6756 24.5118 12.9882C24.8244 13.3007 25 13.7246 25 14.1667V17.5M25 20.4167V24.5833M22.9167 22.5H27.0833"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.5 17.5H22.5083"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 17.5H12.5083"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CreditIcon;
