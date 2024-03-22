import React from 'react';
import {BarChart} from 'react-native-chart-kit';
import {
  appColors,
  fontSize,
  screenWidth,
  sizeBlock,
} from '../../styles/UniversalStyle';
import useGenerateMonthArray, {
  generateRandomArray,
} from '../../utils/hooks/useGenerateMonthArray';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';
import {ScrollView} from 'react-native';
import CustomText from '../text/CustomText';

type Props = {};

const ChartComponent = (props: Props) => {
  const monthData = useGenerateMonthArray();
  const randomNumbers = generateRandomArray();

  const data: ChartData = {
    labels: monthData,
    datasets: [
      {
        data: randomNumbers,
        color: (opacity = 1) => `${appColors.gray}`,
        colors: randomNumbers.map(() => {
          return (opacity = 1) => `${appColors.onGradientPrimary}`;
        }),
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: appColors.lightGray,
    backgroundGradientTo: appColors.lightGray,
    decimalPlaces: 2,
    color: (opacity = 1) => `${appColors.gray}`,
    labelColor: (opacity = 1) => `${appColors.gray}`,
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: appColors.onGradientPrimary,
    },
  };

  const totalEarnings = randomNumbers.reduce((a, b) => {
    return a + b;
  });

  return (
    <>
      <ScrollView horizontal>
        <BarChart
          data={data}
          width={screenWidth * 4.7}
          height={220}
          yAxisLabel="$"
          yAxisSuffix=""
          chartConfig={chartConfig}
          fromZero
          withCustomBarColorFromData
          showBarTops={false}
        />
      </ScrollView>
      <CustomText
        fontSize={fontSize.primary}
        customStyle={{marginTop: sizeBlock.getHeightSize(20)}}
        color={appColors.gray}>
        You made a total of ${totalEarnings}.00 from last month's referrals with
        5 pending referrals.
      </CustomText>
    </>
  );
};

export default ChartComponent;
