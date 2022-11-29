import React from 'react';
import { View, Text, Linking, Image, ScrollView } from 'react-native';
import { styles } from './styles'


export default function Contato() {

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
        
        <Text style={styles.content}
              onPress={() => { Linking.openURL('https://www.linkedin.com/in/vinolemos') }}
              >
                Linkedin
        </Text>

        <Text style={styles.content}
              onPress={() => { Linking.openURL('https://www.github.com/vinolemos') }}
              >
                Github
        </Text>

        <Text style={styles.content}>
          Telefone: (13) 98152-9762
        </Text>

      </View>
      <View style={styles.main}>
        <Text style={styles.heading2}>Talita da Silva Santos</Text>
        <Image
          source={Talita}
          style={styles.profileImage}
        /> 

        <Text style={styles.content}
              onPress={() => { Linking.openURL('https://www.linkedin.com/in/talita-s') }}
              >
                Linkedin
        </Text>

        <Text style={styles.content}
              onPress={() => { Linking.openURL('https://www.github.com/talita-s') }}
              >
                Github
        </Text>

        <Text style={styles.content}>
          Telefone: (13) 98156-0623
        </Text>

      </View>
      <View style={styles.main}>
        <Text style={styles.heading2}>Davi Lacerda</Text>
        <Image
          source={David}
          style={styles.profileImage}
        />    

        <Text style={styles.content}
              onPress={() => { Linking.openURL('https://www.linkedin.com/in/david-lacerda-3047b127') }}
              >
                Linkedin
        </Text>

        <Text style={styles.content}
              onPress={() => { Linking.openURL('https://www.github.com/david-lacerda') }}
              >
                Github
        </Text>

        <Text style={styles.content}>
          Telefone: (13) 94814-3040
        </Text>

      </View>
    </ScrollView>
  );
}
