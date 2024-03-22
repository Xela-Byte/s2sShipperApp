import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const LinkedInIcon = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Rect width={40} height={40} rx={20} fill="#3B25C5" fillOpacity={0.1} />
    <Path
      d="M20.001 17.55C20.918 16.613 22.112 16 23.501 16C24.9597 16 26.3586 16.5795 27.3901 17.6109C28.4215 18.6424 29.001 20.0413 29.001 21.5V29H27.001V21.5C27.001 20.5717 26.6322 19.6815 25.9759 19.0251C25.3195 18.3687 24.4292 18 23.501 18C22.5727 18 21.6825 18.3687 21.0261 19.0251C20.3697 19.6815 20.001 20.5717 20.001 21.5V29H18.001V16.5H20.001V17.55ZM13.001 14.5C12.6032 14.5 12.2216 14.342 11.9403 14.0607C11.659 13.7794 11.501 13.3978 11.501 13C11.501 12.6022 11.659 12.2206 11.9403 11.9393C12.2216 11.658 12.6032 11.5 13.001 11.5C13.3988 11.5 13.7803 11.658 14.0616 11.9393C14.3429 12.2206 14.501 12.6022 14.501 13C14.501 13.3978 14.3429 13.7794 14.0616 14.0607C13.7803 14.342 13.3988 14.5 13.001 14.5ZM12.001 16.5H14.001V29H12.001V16.5Z"
      fill="#3B25C5"
    />
  </Svg>
);
export default LinkedInIcon;
