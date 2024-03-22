import React from 'react';
import * as Animatable from 'react-native-animatable';
import DottedCircleIcon from '../../assets/svgs/DottedCircleIcon';
import {postOrderStyle} from '../../styles/PostOrderStyle';
import {appColors, sizeBlock} from '../../styles/UniversalStyle';

type Props = {
  step: number;
};

const OrderProgressComponent = ({step}: Props) => {
  switch (step) {
    case 0:
      return (
        <>
          <Animatable.View
            style={{backgroundColor: appColors.lightGrey}}
            duration={500}
            animation={'zoomIn'}>
            <DottedCircleIcon
              width={sizeBlock.getHeightSize(55)}
              height={sizeBlock.getHeightSize(55)}
            />
          </Animatable.View>
          <Animatable.View
            duration={500}
            animation={'zoomIn'}
            style={postOrderStyle.progressCircle}
          />
          <Animatable.View
            duration={500}
            animation={'zoomIn'}
            style={postOrderStyle.progressCircle}
          />
        </>
      );
    case 1:
      return (
        <>
          <Animatable.View
            duration={500}
            animation={'zoomIn'}
            style={postOrderStyle.checkedProgressCircle}
          />
          <Animatable.View
            duration={500}
            animation={'zoomIn'}
            style={{backgroundColor: appColors.lightGrey}}>
            <DottedCircleIcon
              width={sizeBlock.getHeightSize(55)}
              height={sizeBlock.getHeightSize(55)}
            />
          </Animatable.View>
          <Animatable.View
            duration={500}
            animation={'zoomIn'}
            style={postOrderStyle.progressCircle}
          />
        </>
      );
    case 2:
      return (
        <>
          <Animatable.View
            duration={500}
            animation={'zoomIn'}
            style={postOrderStyle.checkedProgressCircle}
          />
          <Animatable.View
            duration={500}
            animation={'zoomIn'}
            style={postOrderStyle.checkedProgressCircle}
          />
          <Animatable.View
            duration={500}
            animation={'zoomIn'}
            style={{backgroundColor: appColors.lightGrey}}>
            <DottedCircleIcon
              width={sizeBlock.getHeightSize(55)}
              height={sizeBlock.getHeightSize(55)}
            />
          </Animatable.View>
        </>
      );
    default:
      return null;
  }
};

export default OrderProgressComponent;
