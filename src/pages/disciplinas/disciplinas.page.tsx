import React, { useEffect, useState } from "react"
import { Header } from "../../components/header/header.component"
import {Search} from "../../components/search/search.component"
import { Divider, Text } from 'react-native-paper';
import { FlatList, TouchableOpacity, View } from "react-native";
import {styles} from "./disciplinas.style"
import { useNavigation } from "@react-navigation/native";

export const DisciplinasPage = () => {
    const [disciplinas, setDisciplinas] = useState();
    const [search, setSearch] = React.useState<string>('');

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    useEffect(() => {
        fetch('https://aw-monitorando-monitor.herokuapp.com/disciplinas')
        .then(response => response.json())
        .then((data) => {
          setDisciplinas(data)
        })
      }, []);

      const navigation = useNavigation();

      const handleInfoDisciplina = (item: any) => {
        navigation.navigate('InfoDisciplinaPage', {nome: item.nome, curso: item.abrevCurso, professor: item.professor});
      };

      const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.row} onPress={() => handleInfoDisciplina(item)}>
          <View style={styles.item}>
            <Text style={styles.text}>{item.nome}</Text>
            <Text style={styles.text}>{item.abrevCurso}</Text>

          </View>
          <Divider />
        </TouchableOpacity>
      );

      return (
        <View style={styles.container}>
            <Header title={'Disciplinas'} />
            <Divider />
            <Search placeholder={'Buscar disciplinas'}  />
            <View style={styles.list}>
                <FlatList 
                    data={disciplinas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.nome}
                    ItemSeparatorComponent={() => <Divider />}
                />
            </View>
        </View>
    )
}