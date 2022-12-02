import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList } from "react-native";
// Para React Native CLI
// import { openDatabase } from "react-native-sqlite-storage";

// Para Expo
import * as SQLite from 'expo-sqlite';

// Para React Native CLI
//  const db = openDatabase({
//  name: "compras",
//  });

// Para Expo
const db = SQLite.openDatabase('compras.db');

const App = () => {
  const [compra, setCompra] = useState("");
  const [compras, setCompras] = useState([]);
  const [quantidade, setQuantidade] = useState("");
  const [concluido, setConcluido] = useState();

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), quantidade NUMBER(3), concluido BOOL)`,
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

  const incluirCompra = () => {
    if (!compra) {
      alert("Informe uma compra");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO compras (nome, quantidade) VALUES (?)`,
        [compra], [quantidade],
        (sqlTxn, res) => {
          console.log(`${compra}: Compra adicionada com sucesso!`);
          getCompras();
          setCompra("");
          setQuantidade();
        },
        error => {
          console.log("Erro ao inserir uma Compra " + error.message);
        },
      );
    });
  };

  const getCompras = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM compras ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Compras lidas com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome, quantidade: item.quantidade });
            }

            setCompras(results);
          }
        },
        error => {
          console.log("Erro ao obter Compras " + error.message);
        },
      );
    });
  };

  const renderCompras = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.nome}</Text>
        <Text>({item.quantidade})</Text>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getCompras();
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="#222" />

      <TextInput
        placeholder="Informe uma compra"
        value={compra}
        onChangeText={setCompra}
        style={{ marginHorizontal: 8, marginTop: 50 }}
      />

      <TextInput
        placeholder="Informe a quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        style={{ marginHorizontal: 8, marginTop: 50 }}
      />

      <Button title="Salvar" onPress={incluirCompra} />

      <FlatList
        data={compras}
        renderItem={renderCompras}
        key={t => t.id}
      />
    </View>
  );
};

export default App;