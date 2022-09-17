import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title:{
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Impact',
        color: 'brown',
        textShadowColor: 'gray',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
      },
      scale:{
        alignSelf: 'center',
        width: 300, 
        height: 300,
        padding: 50,
        borderRadius: 40,
      },
      textInput:{
        height: 45,
        width: '50%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
      },
      button:{
        backgroundColor: '#42f54e',
        width: '50%',
        alignSelf: 'center',
        padding: 15,        
        borderRadius: 20,
    },
    buttonText:{
      fontSize: 30,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
})

export { styles };