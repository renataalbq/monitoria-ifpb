import { Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './monitoria.style';
import { useRoute } from '@react-navigation/native';

export interface Monitoria {
  nome: string;
  disciplina: string;
  horario: string;
  sala: string;
  diasDaSemana: string;
  matricula: string;
}

export const MonitoriaPage = () => {
    const route = useRoute();
    const [monitoria, setMonitoria] = useState<Monitoria[]>();

    useEffect(() => {
      fetch('http://localhost:3000/alunos')
      .then(response => response.json())
      .then((data) => {
        setMonitoria(data)
      })
    }, []);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
        {monitoria?.map((monitor, index) => (
          monitor.nome === route.params?.nome ? (
          <React.Fragment key={monitor.matricula}>
            <View style={styles.name}>
              <Text style={styles.text}>{monitor?.nome}</Text>
            </View>
           <View style={styles.row}>
            <Text style={styles.titleText} >Disciplina: </Text>
            <Text style={styles.text}>{monitor?.disciplina}</Text>
           </View>
           <View style={styles.row}>
            <Text style={styles.titleText}>Sala: </Text>
            <Text style={styles.text}>{monitor?.sala}</Text>
           </View>
           <View style={styles.horariosWrapper}>
            <View style={styles.dias}>
              <Text style={styles.textDias}>{monitor?.diasDaSemana[0]}</Text>
              <Text style={styles.textDias}>{monitor?.diasDaSemana[1]}</Text>
              <Text style={styles.textDias}>{monitor?.diasDaSemana[2]}</Text>
            </View>
            <View style={styles.dias}>
              <Text style={styles.textHorarios}>{monitor?.horario[0]}</Text>
              <Text style={styles.textHorarios}>{monitor?.horario[1]}</Text>
              <Text style={styles.textHorarios}>{monitor?.horario[2]}</Text>
            </View>
          </View>
          </React.Fragment>
          ) : <></>
        ))}
        </View>

      </SafeAreaView>

    )
}