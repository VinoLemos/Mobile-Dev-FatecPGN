import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo:{
    fontSize: 18,
    padding: 15,
  },
  descricao:{
    fontSize: 10,
    padding: 15,
  },
  buttonEditar: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "yellow",
    marginVertical: 0,
    marginLeft: 10
  },
  buttonExcluir: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "gray",
    marginVertical: 0,
    marginLeft: 10,
    backgroundColor: "tomato",
    marginTop: 10,
    marginBottom: 10
  },
});

export { styles }
