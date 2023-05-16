import React, { useEffect, useState } from "react"
import { Header } from "../../components/header/header.component"
import {Accordion} from "../../components/accordion/accordion.component"
import {Search} from "../../components/search/search.component"
import { Divider } from 'react-native-paper';
import { FlatList, TextInput, View } from "react-native";
import {styles} from "./monitores.style"
import { useNavigation } from "@react-navigation/native";

export const MonitoresPage = () => {
    
    const [monitores, setMonitores] = useState([]);
    const [search, setSearch] = useState<string>('');
    const [filteredData, setFilteredData] = useState([]);

    const navigation = useNavigation();

    const handleContatoMonitor = (item: any) => {
      navigation.navigate('ContatoMonitorPage', {nome: item.nome, contato: item.contato, img: item.urlImage, curso: item.abrevCurso});
    };

    const handleHorariosMonitor = (item: any) => {
      navigation.navigate('MonitoriaPage', {nome: item.nome});
    };

    useEffect(() => {
      fetchMonitores();
      return () => {

      }
    }, []);

      const fetchMonitores = () => {
        const url = 'http://localhost:3000/alunos';
        fetch(url)
        .then((response => response.json()))
        .then((data) => {
          setFilteredData(data);
          setMonitores(data)
        }).catch((error) => {
          console.log(error)
        })
      }

      const searchFilterFunction = (text: string) => {
        if (text) {
          const newData = monitores.filter((item) => {
              const itemData = item.nome
                ? item.nome.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setFilteredData(newData);
          setSearch(text);
        } else {
          setFilteredData(monitores);
          setSearch(text);
        }
      };

      const renderItem = ({ item }: any) => (
        <View style={styles.container}>
          <Accordion curso={item.abrevCurso} avatar={item.urlImage} name={item.nome} disciplina={item.nomeCurso} onTapContatos={() => handleContatoMonitor(item)} onTapHorarios={() => handleHorariosMonitor(item)}  />
        </View>
      );
      
    return (
        <View style={styles.container}>
            <Header title={'Monitores'} />
            <Divider />
            <Search
              onChangeText={(text: string) => searchFilterFunction(text)}
              value={search}
              placeholder="Buscar monitor"
            />
            <View style={styles.list}>
                <FlatList 
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.nome}
                />
            </View>
        </View>
    )
}