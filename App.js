import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SampleIcon from ',/assets/icon.png';
// to import for screen heigh and width could import from responsive library
// import { pointsByHeight as pbh } from 'core/utils/typography/responsiveScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Open up App.js to start working on your app!</Text>
      </TouchableOpacity>
      <Image source={SampleIcon} style={styles.stretch}></Image>
    </View>
  );
}

// how to set up responsive layout similar to media queries but directly
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: screenWidth / 2,
    height: screenHeight / 2,
    resizeMode: 'stretch',
  },
});
