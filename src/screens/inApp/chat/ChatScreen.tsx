import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {chatStyle} from '../../../styles/ChatStyle';
import {Icon, Searchbar} from 'react-native-paper';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {useState} from 'react';
import CustomText from '../../../components/text/CustomText';
import MessagePreviewComponent from '../../../components/chat/MessagePreviewComponent';
import {ChatScreenProps} from '../../../types/navigation/ChatNavigationType';
type Props = {};

const ChatScreen = ({navigation}: ChatScreenProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeAreaView style={chatStyle.container}>
      <View style={chatStyle.content}>
        <Searchbar
          placeholder="Search messages"
          onChangeText={onChangeSearch}
          value={searchQuery}
          iconColor={appColors.grey}
          placeholderTextColor={appColors.grey}
          inputStyle={chatStyle.searchBarInput}
          cursorColor={appColors.black}
          selectionColor={appColors.grey}
          style={chatStyle.searchBar}
          traileringIcon={() => (
            <Icon
              size={fontSize.medium}
              source="filter-outline"
              color={appColors.onGradientPrimary}
            />
          )}
        />
        <CustomText
          fontSize={fontSize.primary}
          color={appColors.gray}
          customStyle={{marginVertical: sizeBlock.getHeightSize(20)}}>
          List of available shippers in your location, get them notified on your
          post order.
        </CustomText>

        <ScrollView style={{height: screenHeight * 0.65}}>
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
          <MessagePreviewComponent navigation={navigation} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
