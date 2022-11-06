import { Text, View, SafeAreaView, Button} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './info-disciplina.style';
import { useNavigation, useRoute } from '@react-navigation/native';

export const InfoDisciplinaPage = () => {
    const route = useRoute();
    const [monitoria, setMonitoria] = useState();

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
            <Text style={styles.text}>Curso: {route.params?.curso}</Text>
            <Text style={styles.text}>Professor: {route.params?.professor}</Text>
            {monitoria[0].alunos.map((item) => (
                <Text style={styles.text}>Monitor: {item}</Text>

            ))}
            <Text style={styles.text}>Horário da Monitoria: {monitoria[0].horario}</Text>
            <Text style={styles.text}>Sala da Monitoria: {monitoria[0].sala}</Text>

        </View>

      </SafeAreaView>
    ) : (<View></View>)
}