import {View, Text, StyleSheet, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  screenHeight,
  screenWidth,
  sizeBlock,
} from '../../styles/UniversalStyle';
type Props = {};

const GalleryComponent = (props: Props) => {
  const gallery = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <FlatList
      numColumns={3}
      style={styles.container}
      columnWrapperStyle={{
        columnGap: 15,
      }}
      data={gallery}
      renderItem={({item}) => {
        return (
          <>
            <FastImage
              source={require('../../assets/images/avatar.jpg')}
              style={styles.avatar}
              resizeMode="contain"
            />
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    height: screenHeight / 3,
  },
  avatar: {
    width: screenWidth / 3.75,
    height: screenWidth / 3.75,
    marginBottom: 15,
  },
});

export default GalleryComponent;
