import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    titulo:{
        fontSize: 40,
        fontFamily: 'Verdana',
        marginTop: 15,
        textAlign: 'center'
    },
    caixa:{
        width: 300,
        height: 280,
        marginTop: 20,
        padding: 5,
        borderWidth: 1,
        borderColor: '#222',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(95, 147, 186, 0.7)',
        borderColor: '#19394a'
    },
    tituloVaga:{
        fontSize: 18,
        fontFamily: 'Verdana',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 5 
    },
    div:{
        flexDirection: 'column',
        alignContent: 'flex-start'
    },
    tituloTexto:{
        fontSize: 14,
        fontFamily: 'Verdana',
        color: 'white',
        fontWeight: 'bold',
    },
    texto:{
        fontSize: 14,
        fontFamily: 'Verdana',
        color: 'white',
    }
})

export {styles};
