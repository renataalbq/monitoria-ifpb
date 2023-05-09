import { Text, View, SafeAreaView, Button} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './info-disciplina.style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Monitoria } from '../monitoria/monitoria.page';

export const InfoDisciplinaPage = () => {
    const route = useRoute();
    const [monitoria, setMonitoria] = useState<Monitoria[]>();

    useEffect(() => {
      fetch('http://localhost:3000/alunos')
      .then(response => response.json())
      .then((data) => {
        setMonitoria(data)
      })
    }, []);

    
    return monitoria ? (
      <SafeAreaView style={styles.container}>
        
          <View style={styles.wrapper}>
            <Text style={styles.textHeader}>{route.params?.nome} - {route.params?.curso}</Text>
            <Text style={styles.textHeader}>{route.params?.professor} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.title}>Monitores: </Text>
            {monitoria?.map((info, index) => (
                info.disciplina === route.params?.nome ? (
                <React.Fragment key={index}>
                  <View style={styles.monitorWrapped}>
                    <Text style={styles.text}>{info?.nome}</Text>
                    <Text style={styles.text}>{info?.sala}</Text>
                    <View style={styles.row}>
                      <View style={styles.column}>
                        <Text style={styles.text}>{info?.diasDaSemana[0]}</Text>
                        <Text style={styles.text}>{info?.horario[0]}</Text>
                      </View>
                      <View style={styles.column}>
                        <Text style={styles.text}>{info?.diasDaSemana[1]}</Text>
                        <Text style={styles.text}>{info?.horario[1]}</Text>
                      </View>
                      {info?.diasDaSemana.length > 2 &&
                        <View style={styles.column}>
                          <Text style={styles.text}>{info?.diasDaSemana[2]}</Text>
                          <Text style={styles.text}>{info?.horario[2]}</Text>
                        </View>
                      }
                    </View>
                  </View>
              </React.Fragment>
              ) : <></>
            ))}

        </View>

      </SafeAreaView>
    ) : (<View></View>)
}