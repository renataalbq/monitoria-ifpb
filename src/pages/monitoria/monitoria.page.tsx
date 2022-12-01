import { Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './monitoria.style';
import { useRoute } from '@react-navigation/native';

interface Monitoria {
  alunos: Array<string>;
  disciplina: string;
  horario: string;
  sala: string;
  diasDaSemana: string;
}

export const MonitoriaPage = () => {
    const route = useRoute();
    const [monitoria, setMonitoria] = useState<Monitoria[]>();

    useEffect(() => {
      fetch('https://aw-monitorando-monitor.herokuapp.com/monitorias')
      .then(response => response.json())
      .then((data) => {
        setMonitoria(data)
      })
    }, []);

    const renderItem = ({ item }: any) => (
      <View>
        {item.alunos.map((aluno: string) => 
          {if (aluno === route.params?.nome) {
            {console.log(aluno, item?.horario)}
            <Text style={styles.text}>Horário: {item?.horario}</Text>
          }} 
        )}
      </View>
    );

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
        <FlatList 
          data={monitoria}
          renderItem={renderItem}
          keyExtractor={(item) => item.disciplina} />
        </View>

      </SafeAreaView>

    )
}