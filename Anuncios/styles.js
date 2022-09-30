import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  navBar: {
    width: '100%',
    height: 70,
    backgroundColor: '#0D0D0D',
    alignContent: 'center',
    justifyContent: 'center'
  },
  navBarTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: 'center'
  },
  scrollViewContainerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600
  }
});

export default styles