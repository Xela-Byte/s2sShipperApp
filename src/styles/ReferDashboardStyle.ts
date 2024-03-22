import {StyleSheet} from 'react-native';
import {sizeBlock, universalStyle} from './UniversalStyle';

export const referDashboardStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    padding: sizeBlock.getWidthSize(20),
  },
  filterHeader: {
    paddingVertical: sizeBlock.getHeightSize(10),
    ...universalStyle.verticalCentering,
  },
});
