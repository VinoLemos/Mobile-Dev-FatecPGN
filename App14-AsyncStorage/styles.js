import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 20,
      alignItems: 'center'
    },
    botoes: {
        flexDirection: 'row'
    },
    title: {
        justifyContent: 'center',
        padding: '30px',
        fontSize: '30px',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    frases: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width: '80%',
        height: '50%',
        borderWidth: '5px'
    }
  });

  export { styles };