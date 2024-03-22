import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';

const ReferFacebookIcon = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Rect width={40} height={40} rx={20} fill="#353CB7" fillOpacity={0.1} />
    <Path
      d="M21 17H25.5L25 19H21V28H19V19H15V17H19V15.128C19 13.345 19.186 12.698 19.534 12.046C19.875 11.4018 20.4018 10.875 21.046 10.534C21.698 10.186 22.345 10 24.128 10C24.65 10 25.108 10.05 25.5 10.15V12H24.128C22.804 12 22.401 12.078 21.989 12.298C21.6933 12.4525 21.4521 12.694 21.298 12.99C21.078 13.401 21 13.804 21 15.128V17Z"
      fill="#353CB7"
    />
  </Svg>
);
export default ReferFacebookIcon;
