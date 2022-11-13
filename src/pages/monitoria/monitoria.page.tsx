import { Text, View, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './monitoria.style';
import { useRoute } from '@react-navigation/native';

interface MonitoriaProps {
  horario: string;
  sala: string
  alunos: Array<Alunos>
}

interface Alunos {
  nome: string;
}

export const MonitoriaPage = () => {
    const route = useRoute();
    const [monitoria, setMonitoria] = useState<MonitoriaProps[]>();

    useEffect(() => {
      fetch('https://aw-monitorando-monitor.herokuapp.com/monitorias')
      .then(response => response.json())
      .then((data) => {
        setMonitoria(data)
      })
    }, []);

        return monitoria ? (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
          {monitoria.map((item: { alunos: Array<Alunos>; horario: string | null | undefined; sala: string | null | undefined; }, index) => 
            {item.alunos.map((aluno, indexAluno) => 
              {if (aluno === route.params?.nome) {
                  <>
                    <Text style={styles.text}>Horário: {item.horario}</Text>
                    <Text style={styles.text}>Sala: {item.sala}</Text>
                  </>
               }}
            
            )})}
         
        </View>

      </SafeAreaView>
    ) : (<View></View>)
}