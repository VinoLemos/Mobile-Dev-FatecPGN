import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quoteContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '600px',
        color: '#333',
        marginBottom: 20,
    },
    quote: {
        color: '#000',
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: 1.1,
        fontWeight: '400px',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 30
    },
    newQuote: {
        fontSize: 18,
        textAlign: 'center',
    },
    author: {
        textAlign: 'right',
        fontWeight: '300px',
        fontStyle: 'italic',
        fontSize: 16,
        fontColor: '#000'
    },
    buttons: {
        borderWidth: 2,
        borderColor: '#5372F0',
        borderRadius: 50,
        padding: 15,
    },
    switch: {
        alignSelf:'left',
        justifyContent: 'left',
        alignItems: 'left'
    },
    toggle: {
        borderRadius: '50%',
        paddingBottom: 20,
    }
});

export { styles };