import { Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './monitoria.style';
import { useRoute } from '@react-navigation/native';

interface Monitoria {
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
      fetch('https://backend-monitor-production.up.railway.app/alunos')
      .then(response => response.json())
      .then((data) => {
        setMonitoria(data)
      })
    }, []);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
        {monitoria?.map(monitor => (
          monitor.nome === route.params?.nome ? (
          <React.Fragment key={monitor.matricula}>
            <Text style={styles.text}>{monitor?.nome}</Text>
            <Text style={styles.text}>Disciplina: {monitor?.disciplina}</Text>
            <Text style={styles.text}>Sala: {monitor?.sala}</Text>
            <Text style={styles.text}>{monitor?.diasDaSemana[0]}</Text>
            <Text style={styles.text}>{monitor?.horario[0]}</Text>

            <Text style={styles.text}>{monitor?.diasDaSemana[1]}</Text>
            <Text style={styles.text}>{monitor?.horario[1]}</Text>
            
            <Text style={styles.text}>{monitor?.diasDaSemana[2]}</Text>
            <Text style={styles.text}>{monitor?.horario[2]}</Text>

          </React.Fragment>
          ) : <></>
        ))}
        </View>

      </SafeAreaView>

    )
}