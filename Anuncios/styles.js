import { StyleSheet, Dimensions } from 'react-native';
import { ImageUriCache } from 'react-native-web/dist/cjs/modules/ImageLoader';
const { width, height } = Dimensions.get('screen');


const imageW = Dimensions.get('screen').width / 2;
const imageH = imageW * 1.54;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  flatlistView: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffSet: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20
  },
  image: {
    width: imageW,
    height: imageH,
    resizeMode: 'cover',
    borderRadius: 16,
  }
});

export {styles}