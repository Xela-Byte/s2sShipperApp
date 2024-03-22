import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {MessageScreenProps} from '../../../types/navigation/ChatNavigationType';
import {messageStyle} from '../../../styles/MessageStyle';
import HeaderComponent from '../../../components/header/HeaderComponent';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../components/text/CustomText';
import {
  appColors,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import moment from 'moment';
import ChatBubble from 'react-native-chat-bubble';
import GradientButton from '../../../components/button/GradientButton';
import OutlinedButton from '../../../components/button/OutlinedButton';

const MessageScreen = ({navigation, route}: MessageScreenProps) => {
  const {params} = route;
  const {name} = params;

  const todayDate = moment().format('D MMMM YYYY');
  const presentTime = moment().format('hh:mm a');
  return (
    <SafeAreaView style={messageStyle.container}>
      <HeaderComponent title={name} onPress={navigation.goBack} isProfile />
      <View style={messageStyle.content}>
        <ScrollView style={{height: screenHeight * 0.8}}>
          <Pressable
            style={messageStyle.profilePictureContainer}
            onPress={() => {
              navigation.navigate('ShipperProfile');
            }}>
            <FastImage
              source={require('../../../assets/images/avatar.jpg')}
              resizeMode="contain"
              style={messageStyle.profilePicture}
            />
          </Pressable>
          <CustomText
            customStyle={{
              textAlign: 'center',
              marginVertical: sizeBlock.getHeightSize(10),
            }}
            color={appColors.gray}
            fontSize={fontSize.primary}>
            Your privacy and security are our top priorities. Be rest assured,
            our chat inbox is equipped with robust encryption protocols to
            ensure that your messages remain confidential and secure
          </CustomText>

          <CustomText
            customStyle={{
              textAlign: 'center',
              marginVertical: sizeBlock.getHeightSize(10),
              textTransform: 'uppercase',
            }}
            color={appColors.gray}
            fontType="medium"
            fontSize={fontSize.primary - 2}>
            {todayDate}
          </CustomText>

          <View style={messageStyle.bubbleContainer}>
            <FastImage
              source={require('../../../assets/images/avatar.jpg')}
              resizeMode="contain"
              style={messageStyle.avatar}
            />

            <ChatBubble
              isOwnMessage={false}
              bubbleColor={appColors.onGradientPrimary}
              tailColor={appColors.onGradientPrimary}
              withTail={true}
              onPress={() => console.log('Bubble Pressed!')}>
              <View style={messageStyle.bubble}>
                <CustomText fontSize={fontSize.primary} color={appColors.white}>
                  Hello, I’m Draxler Chills. I’ve received a notification about
                  the item you’ve scheduled for shipping. I’m here and prepared
                  to expedite the shipment at an unprecedented speed.
                </CustomText>
                <CustomText
                  customStyle={{
                    marginLeft: 'auto',
                    marginTop: sizeBlock.getHeightSize(10),
                  }}
                  color={appColors.white}
                  fontType="medium"
                  fontSize={fontSize.primary - 2}>
                  {presentTime}
                </CustomText>
              </View>
            </ChatBubble>
          </View>

          <CustomText
            customStyle={{
              textAlign: 'center',
              marginTop: sizeBlock.getHeightSize(70),
              marginBottom: sizeBlock.getHeightSize(20),
            }}
            color={appColors.gray}
            fontSize={fontSize.primary - 2}>
            Received a message from Draxler Chills in response to the shipping
            notification for your item. Ready to assist with any further details
            or arrangements
          </CustomText>

          <View style={messageStyle.button}>
            <GradientButton
              title="Accept"
              onPress={() => {}}
              showArrow
              customViewStyle={{
                width: screenWidth * 0.42,
              }}
            />
            <OutlinedButton
              title="Decline"
              customViewStyle={{width: screenWidth * 0.42}}
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
