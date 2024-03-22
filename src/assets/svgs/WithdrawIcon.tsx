import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const WithdrawIcon = (props: SvgProps) => (
  <Svg width={25} height={26} viewBox="0 0 25 26" fill="none" {...props}>
    <G clipPath="url(#clip0_440_2188)">
      <Path
        d="M1.78568 8.53568C1.54888 8.53568 1.32178 8.44161 1.15433 8.27417C0.986891 8.10672 0.892822 7.87962 0.892822 7.64282V2.28568C0.892822 2.04888 0.986891 1.82178 1.15433 1.65433C1.32178 1.48689 1.54888 1.39282 1.78568 1.39282H23.2143C23.4511 1.39282 23.6782 1.48689 23.8456 1.65433C24.013 1.82178 24.1071 2.04888 24.1071 2.28568V7.64282C24.1071 7.87962 24.013 8.10672 23.8456 8.27417C23.6782 8.44161 23.4511 8.53568 23.2143 8.53568"
        stroke="#D85169"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.14286 5.85718H17.8571C18.3503 5.85718 18.75 6.25692 18.75 6.75003V19.25C18.75 19.7431 18.3503 20.1429 17.8571 20.1429H7.14286C6.64975 20.1429 6.25 19.7431 6.25 19.25V6.75003C6.25 6.25692 6.64975 5.85718 7.14286 5.85718Z"
        fill="#D85169"
        stroke="#D85169"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.4999 15.6784C13.9792 15.6784 15.1784 14.4792 15.1784 12.9999C15.1784 11.5205 13.9792 10.3213 12.4999 10.3213C11.0205 10.3213 9.82129 11.5205 9.82129 12.9999C9.82129 14.4792 11.0205 15.6784 12.4999 15.6784Z"
        fill="white"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.25 24.6072H18.75"
        stroke="#D85169"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_440_2188">
        <Rect
          width={25}
          height={25}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default WithdrawIcon;
