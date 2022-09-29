import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.caixa}>
            <Text style={styles.tituloVaga}>Dev .NET Júnior</Text>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Salário: </Text> 
              <Text style={styles.texto}> R$ 3.800</Text>
            </View>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Descrição: </Text>
              <Text style={styles.texto}> Conhecimentos e vivência em projetos baseados em arquitetura MVC e WebAPI;
                Necessário conhecimento com programação Orientada a Objetos, DDD, CQRS, Event-Driven, Clean Code, GIT, Code ReView e Pull Request.
              </Text>
            </View>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Contato: </Text>
              <Text style={styles.texto}>techsoluções@gmail.com | (11) 1521 - 2319</Text>
            </View>
          </View>
          <View style={styles.caixa}>
            <Text style={styles.tituloVaga}>Scrum Master</Text>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Salário: </Text>
              <Text style={styles.texto}>R$ 5.200</Text>
            </View>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Descrição: </Text>
              <Text style={styles.texto}> Organizar reuniões de Scrum; Planejamento, revisões de Sprints; 
                Liderar o time, organizar a equipe, resolver problemas. Mandatório: inglês avançado ou fluente. 
                implementação e garantia dos princípios agile na equipe.
              </Text>
            </View>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Contato: </Text>
              <Text style={styles.texto}>Contato: rhexpert@outlook.com | (13) 7591 - 3227</Text>
            </View>
          </View>
          <View style={styles.caixa}>
            <Text style={styles.tituloVaga}>Estagiário</Text>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Salário:</Text>
              <Text style={styles.texto}>R$ 2.000</Text>
            </View>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Descrição: </Text>
              <Text style={styles.texto}> Elabora, atualiza e mantém a documentação técnica básica do ambiente de TI;
                Realizar atendimentos aos usuários;
                Instala e configura softwares;
                Orienta os usuários nas especificações e comandos necessários para sua utilização.
              </Text>
            </View>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Contato: </Text>
              <Text style={styles.texto}> fitbusca@gmail.com | (11) 7231 - 3652</Text>
            </View>
          </View>
          <View style={styles.caixa}>
            <Text style={styles.tituloVaga}>Dev Java</Text>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Salário: </Text>
              <Text style={styles.texto}>R$ 3.600</Text>
            </View>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Descrição: </Text>
              <Text style={styles.texto}> Desenvolver sistemas.
                Analisar soluções.
                Homologar e implantar projetos/ melhorias. Conhecimento em análise de negócios.
                Conhecimento em modelagem de dados e modelagem de processos
                Conhecimento em bancos de dados Oracle, Postgre SQL, MySQL/Maria DB.
              </Text>
            </View>
            <View style={styles.div}>
              <Text style={styles.tituloTexto}>Contato:</Text>
              <Text style={styles.texto}> itbusca@gmail.com | (11) 7231 - 3652</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default App;
