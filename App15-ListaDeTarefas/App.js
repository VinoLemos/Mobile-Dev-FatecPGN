import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Provider as PaperProvider, Appbar, Button, TextInput, Card, Paragraph, Checkbox } from 'react-native-paper';

import Entypo from 'react-native-vector-icons/Entypo';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("tarefas.db");

const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [checked, setChecked] = useState(false);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };

  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <Card>
        <Paragraph>{item.id}</Paragraph>
        <Paragraph>{item.nome}</Paragraph>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={(item) => setChecked(!checked)}
        />
      </Card>
    );
  };

  useEffect(() => {
    createTables();
    getTarefas();
  }, []);

  return (
    <PaperProvider>
      <View>
        <Appbar.Header style={styles.appBar}>
          <Appbar.Content title="Tarefas" />
        </Appbar.Header>

        <View style={styles.containerTarefa}>
          <TextInput
            placeholder="Insira uma nova tarefa"
            textColor="#222"
            activeOutlineColor="#222"
            value={tarefa}
            onChangeText={setTarefa}
            style={styles.campoTarefa}
          />
          <Button onPress={incluirTarefa} >
            <Entypo name='circle-with-plus' size={35} color="#4bcc6e" />
          </Button>
        </View>
        
        <FlatList
          data={tarefas}
          renderItem={renderTarefa}
          key={t => t.id}
        />

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#346beb"
  },
  containerTarefa: {
    margin: "10%",
    display: "flex",
    flexDirection: "row"
  },
  campoTarefa: {
    backgroundColor: "#ddd",
    width: "70%"
  }
});

export default App