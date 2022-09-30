import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions, Image, ToastAndroid } from 'react-native'
import styles from './styles'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const cardPerSlide = 2
const cardPadding = 15
const paddingAround = cardPadding * 2 // slide horizontal padding
const cardBetweenPadding = cardPadding * (cardPerSlide - 1)
const totalPadding = paddingAround + cardBetweenPadding
const imageWidth = (screenWidth - totalPadding) / cardPerSlide
const imageHeight = (imageWidth / (2 / 3))


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>MOVIES</Text>
        </View>
        <ScrollView
          ref={(ref) => { this.stepCarousel = ref }}
          contentContainerStyle={styles.scrollViewContainerStyle}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth, paddingHorizontal: cardPadding }}>
            <View style={{ width: imageWidth }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg' }}
                style={{ width: imageWidth, height: imageHeight }} />
            </View>
            <View style={{ width: imageWidth }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/z7FCF54Jvzv9Anxyf82QeqFXXOO.jpg' }}
                style={{ width: imageWidth, height: imageHeight }} />
            </View>
            <View style={{ width: imageWidth }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/tgcrYiyG75iDcyk3en9NzZis0dh.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
          </View>
          
        </ScrollView>
      </View>
    )
  }
}