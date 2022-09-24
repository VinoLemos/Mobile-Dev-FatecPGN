import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subcontainer: {
        flex: 4
    },
    titulo: {
        color: 'red',
        fontSize: 40,
        alignSelf: 'center',
        margin: 50,
        flex: 1,
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 10,
        marginLeft: 50,
        borderBottomColor: '#000',
        margin: 5,
        marginRight: 50,

        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: 2     // Add this to specify bottom border thickness
    },
    form: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#42f54e',
        width: '20%',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
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
        justifyContent: 'left'
    },
});

export { styles }