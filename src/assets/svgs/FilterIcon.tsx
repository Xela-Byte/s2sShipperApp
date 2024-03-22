import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const FilterIcon = (props: SvgProps) => (
  <Svg width={18} height={10} viewBox="0 0 18 10" fill="none" {...props}>
    <Path
      d="M6 3.80005L9 0.800049L12 3.80005"
      stroke="#808080"
      strokeLinecap="round"
    />
    <Path
      d="M6 6.19995L9 9.19995L12 6.19995"
      stroke="#808080"
      strokeLinecap="round"
    />
  </Svg>
);
export default FilterIcon;
