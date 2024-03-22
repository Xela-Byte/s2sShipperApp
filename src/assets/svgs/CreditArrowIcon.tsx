import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CreditArrowIcon = (props: SvgProps) => (
  <Svg fill="green" width="20px" height="20px" viewBox="0 0 24 24" {...props}>
    <Path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
  </Svg>
);
export default CreditArrowIcon;
