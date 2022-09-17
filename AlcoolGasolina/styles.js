import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center'
    },
    title:{
        fontFamily: 'Impact',
        fontSize: 50,
        padding: 80,
        color: 'green',
        alignSelf: 'center',
        textShadowColor: 'gray',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
    },
    gasPump:{        
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
    textButton:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    resultado:{
        fontSize: 25,
        color: '#42f54e',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
export { styles };