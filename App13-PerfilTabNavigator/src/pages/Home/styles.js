import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        justifyContent: 'center',
        fontFamily: 'Courier',
        fontSize: 30,
        fontStyle: 'bold',
        alignSelf: 'center',
        alignContent: 'center',
        color: '#090d14',
        backgroundColor: '#732f37',
        borderRadius: 25,
        borderWidth: 2.5,
        marginTop: 10,
        padding: 5
    },
    main: {
        alignItems: 'center',
        width: '30%',
        borderWidth: 2.5,
    },
    heading2: {
        fontSize: 22.5,
        fontStyle: 'bold',
        margin: 10,
        fontFamily: 'Courier',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 80,
        color: '#090d14',
    },
    content: {
        justifyContent: 'center',
        fontFamily: 'Courier',
        fontSize: 18,
        color: '#253e6b',
        padding: 10,
        marginTop: 10,
    },
    profileImage: {
        width: '15%',
        height: '18%',
        padding: 10,
        alignSelf: 'top',
        justifyContent: 'center',
        borderRadius: '50%',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        height: '120%'
    },
    scrollview:{
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#222',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: '#19394a',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
    }
});

export { styles };