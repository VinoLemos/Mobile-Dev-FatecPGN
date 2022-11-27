import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    titulo:{
        fontSize: 30,
        fontFamily: 'Courier',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 15
    },
    subtitulo:{
        fontSize: 16,
        fontFamily: 'Courier',
        fontStyle: 'italic',
        textAlign: 'center',
        paddingBottom: 30
    },
    form:{
        flexDirection: 'row',
        textAlign: 'left',
        alignSelf: 'center',
        padding: 30
    },
    texto: {
        fontSize: 15,
        fontFamily: 'Courier New',
        fontWeight: 'bold'
    },
    input:{
        borderBottomWidth: 3,
        borderBottomColor: '#222'
    },
    botao: {
        alignSelf: 'center',
        width: 200,
        height: 30,
        textAlign: 'center',
        padding: 5,
        borderRadius: 3,
        backgroundColor: '#a88d32'
    },
    resultado:{
        fontSize: 20,
        fontFamily: 'Courier',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3f8f4c',
        padding: 20
    }
})

export { styles }