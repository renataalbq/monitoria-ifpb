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
    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        fetch('https://aw-monitorando-monitor.herokuapp.com/disciplinas')
        .then(response => response.json())
        .then((data) => {
          setFilteredData(data);
          setDisciplinas(data)
        })
      }, []);

      const navigation = useNavigation();

      const searchFilterFunction = (text: string) => {
        if (text) {
          const newData = disciplinas.filter(
            function (item: any) {
              const itemData = item.nome
                ? item.nome.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setFilteredData(newData);
          console.log(newData)
          setDisciplinas(newData);
          setSearch(text);
        } else {
          setFilteredData(disciplinas);
          setSearch(text);
        }
      };

      const handleInfoDisciplina = (item: any) => {
        navigation.navigate('InfoDisciplinaPage', {nome: item.nome, curso: item.abrevCurso, professor: item.professor});
      };

      const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.row} onPress={() => handleInfoDisciplina(item)}>
          <View style={styles.item}>
            <Text style={styles.text}>{item.nome}</Text>
          </View>
          <View style={styles.badge}><Text style={{textAlign: "center"}}>{item.abrevCurso}</Text></View>
        </TouchableOpacity>
      );

      return (
        <View style={styles.container}>
            <Header title={'Disciplinas'} />
            <Divider />
            <Search
              onChangeText={(text: string) => searchFilterFunction(text)}
              value={search}
              placeholder="Buscar disciplina"
            />
            <View style={styles.list}>
                <FlatList 
                    data={disciplinas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.nome}
                />
            </View>
        </View>
    )
}