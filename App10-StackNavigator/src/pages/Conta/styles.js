import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    titulo: {
        color: '#024704',
        fontSize: 40,
        alignSelf: 'center',
        margin: 50,
        flex: 1,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 10,
        marginLeft: 50,
        borderBottomColor: '#000',
        margin: 5,
        marginRight: 50,
        color: '#64646b',
        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: 2     // Add this to specify bottom border thickness
    },
    form: {
        flexDirection: 'row',
        flex: 6
    },
    button: {
        backgroundColor: '#42f54e',
        width: '20%',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
    },
    cancelar: {
        backgroundColor: 'red',
        width: '20%',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
    },
    switch: {
        marginLeft: 10,
    },
    sliderText:
    {
        textAlign: 'center',
        fontSize: 25,
        color: 'green'
    },
    resultados:
    {
        alignContent: 'left',
        justifyContent: 'left',
        margin: 10,
        color: 'green',
        backgroundColor: '#7df08e',
        fontSize: 15,
        fontWeight: 'bold',
        borderColor: 'grey',
        borderRadius: 5,
        borderStyle: 'solid',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
    }, 
    text:{
        fontWeight: 'bold',       
        alignSelf: 'left',
        flex: 1,
    },
});

export { styles }