import {
  Text,
  TextInput,
  View,
  Picker,
  Switch,
  Pressable,
  Button,
} from "react-native";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { styles } from "./styles";

import { useNavigation, StackActions } from "@react-navigation/native";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

export default function Conta() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState("Não Definido");
  const [escolaridade, setEscolaridade] = useState("");
  const [brasileiro, setBrasileiro] = useState(false);
  const [nacionalidade, setNacionalidade] = useState("");
  const [limite, setLimite] = useState(50.0);
  const [resultado, setResultado] = useState("");

  const ebrasileiro = () => {
    if ({ brasileiro } == true) {
      setNacionalidade("Brasileiro");
    } else setNacionalidade("Não brasileiro");
  };

  const irSobre = () => {
    navigation.navigate('Sobre', {
      nome,
      idade,
      sexo
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>
      <View style={styles.form}>
        <Text style={styles.text}>Nome: </Text>
        <TextInput
          placeholder="Nome"
          style={styles.textInput}
          onChangeText={(n) => setNome(n)}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.text}>Idade: </Text>
        <TextInput
          placeholder="Idade"
          style={styles.textInput}
          onChangeText={(i) => setIdade(i)}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.text}>Sexo: </Text>
        <Picker selectedValue={sexo} onValueChange={(sexo) => setSexo(sexo)}>
          <Picker.Item value={""} label="Não informado..." />
          <Picker.Item value={"Masculino"} label="Masculino" />
          <Picker.Item value={"Feminino"} label="Feminino" />
        </Picker>
      </View>

      <View style={styles.form}>
        <Text style={styles.text}>Escolaridade: </Text>
        <Picker onValueChange={(escolaridade) => setEscolaridade(escolaridade)}>
          <Picker.Item value={""} label="Não informado..." />
          <Picker.Item
            value={"Ensino Fundamental"}
            label="Ensino Fundamental"
          />
          <Picker.Item value={"Ensino Médio"} label="Ensino Médio" />
          <Picker.Item value={"Ensino Superior"} label="Ensino Superior" />
        </Picker>
      </View>

      <View style={styles.form}>
        <Text style={styles.text}>Limite: </Text>
        <Slider
          minimumValue={50.0}
          maximumValue={1500.0}
          style={{ width: 200, height: 40 }}
          onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
          value={limite}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#FFFFFF"
        />
        <Text style={styles.sliderText}>R$ {limite.toFixed(0)}</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.text}>Brasileiro? </Text>
        <Text>{brasileiro ? "Sim" : "Não"}</Text>
        <Switch
          style={styles.switch}
          value={brasileiro}
          onValueChange={(valor) => setBrasileiro(valor)}
        />
      </View>
      <Text>{nacionalidade}</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={irSobre()}>
          Confirmar
        </Text>
      </Pressable>

      <Pressable
        style={styles.cancelar}
        title="Cancelar"        
      >
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Cancelar</Text>
      </Pressable>
    </View>
  );
}
