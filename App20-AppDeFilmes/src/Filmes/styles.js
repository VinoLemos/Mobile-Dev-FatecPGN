import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";



const styles = StyleSheet.create({
    card: {
        width: responsiveWidth(80),
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
    },
    tituloCard: {
        alignSelf: 'left',
        fontSize: 10,
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
    descricao: {
        fontSize: 10,
        padding: 15,
    },
    tinyLogo: {
        width: '100%',
        height: undefined,
        aspectRatio: 3,
        resizeMode: 'cover',
    },
    botao: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    botaoView: {
        flexDirection: 'row',
    },
    sinopse: {
        padding: 50,
        fontSize: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
})

export default styles;