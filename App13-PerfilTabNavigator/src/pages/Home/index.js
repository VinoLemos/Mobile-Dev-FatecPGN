import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'


export default function Home() {
  const navigation = useNavigation();

  const Vinicius = 'https://media-exp1.licdn.com/dms/image/C4E03AQE4-V9ge5GORA/profile-displayphoto-shrink_200_200/0/1620334119526?e=1675296000&v=beta&t=n35FgpwQDEXX8jxCBPd0QCdFEINBh2g4RsHTTusp4FE';
  const Talita = 'https://media-exp1.licdn.com/dms/image/C4E03AQGdFDpoGXB77g/profile-displayphoto-shrink_200_200/0/1624632723631?e=1675296000&v=beta&t=4PAoVrsl-ySxCS29ZwvRGVv5KK7NZmpodZ_skIFYTEE';
  const David = 'https://media-exp1.licdn.com/dms/image/C4D03AQGkWtNBOXbuzw/profile-displayphoto-shrink_200_200/0/1668048224846?e=1675296000&v=beta&t=7D8Z5eo1G8RoMlM08cY1qVLe29wnswrp6YCN_I9gwW0';

  return (
    <ScrollView
      horizontal="true"
      showsVerticalScrollIndicator={false}
      style={styles.scrollview}
      contentContainerStyle={{ width: `${80 * 2}%` }}
    >
      <View style={styles.main}>
        <Text style={styles.heading2}>Vinícius Lemos de Oliveira</Text>
        <Image
          source={Vinicius}
          style={styles.profileImage}
        />
        <Text style={styles.content}> Desenvolvedor de software júnior no PSA Tech Group e aluno de Análise e Desenvolvimento de Sistemas na Fatec Praia Grande. Tenho conhecimento em sistemas Linux, linguagens e desenvolvimento Back-End, gerenciamento de banco de dados, linguagem SQL, serviços e plataformas em nuvem e um pouco de desenvolvimento Web. Atualmente estou direcionando meus estudos para DevOpsEngineering.
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.heading2}>Talita da Silva Santos</Text>
        <Image
          source={Talita}
          style={styles.profileImage}
        />
        <Text style={styles.content}> Apaixonada pela área de ti, buscando sempre descobrir e aprender novas tecnologias.


          "Não temos uma chance para fazer muitas coisas, então cada uma tem que ser excelente. Porque isso é a nossa vida. A vida é curta, e então você morre, você sabe? E todos nós escolhemos o que fazer das nossas vidas. Então é melhor que seja algo muito bom. É melhor que valha a pena".
          - Steve Jobs
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.heading2}>Davi Lacerda</Text>
        <Image
          source={David}
          style={styles.profileImage}
        />
        <Text style={styles.content}>Graduado em Economia e Contábeis e especializado em Controladoria e Finanças. No momento cursando Análise e Desenvolvimento de Sistemas. Experiência profissional relacionada a orçamento matricial, GMD (Gerenciamento Matricial de Despesas), BSC(Balanced Scorecard) ou GPD (Gerenciamento pelas Diretrizes), GRD (Gerenciamento da Rotina do Dia a dia). Desenvolvimento e modelagem financeira usando software IBM Planning Analytics TM1. Análise de DRE, P&L a partir das variações contra planejado, geração de caixa, planejamento estratégico e análise de riscos. Criação de reports, dashboards e BI’s. Inglês avançado.
        </Text>
      </View>
    </ScrollView>
  );
}
