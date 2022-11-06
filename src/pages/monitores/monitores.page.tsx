import React, { useEffect, useState } from "react"
import { Header } from "../../components/header/header.component"
import {Accordion} from "../../components/accordion/accordion.component"
import {Search} from "../../components/search/search.component"
import { Divider } from 'react-native-paper';
import { FlatList, View } from "react-native";
import {styles} from "./monitores.style"
import { useNavigation } from "@react-navigation/native";

export const MonitoresPage = () => {
    
    const [monitores, setMonitores] = useState();
    const [search, setSearch] = useState<string>('');

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    const navigation = useNavigation();

    const handleContatoMonitor = (item: any) => {
      navigation.navigate('ContatoMonitorPage', {nome: item.nome});
    };

    const handleHorariosMonitor = (item: any) => {
      navigation.navigate('MonitoriaPage', {nome: item.nome});
    };

    useEffect(() => {
        fetch('https://aw-monitorando-monitor.herokuapp.com/alunos')
        .then(response => response.json())
        .then((data) => {
          setMonitores(data)
        })
      }, []);

      const renderItem = ({ item }: any) => (
        <View>
          <Accordion name={item.nome} disciplina={item.nomeCurso} onTapContatos={() => handleContatoMonitor(item)} onTapHorarios={() => handleHorariosMonitor(item)}  />
          <Divider />
        </View>
      );
      
    return (
        <View style={styles.container}>
            <Header title={'Monitores'} />
            <Divider />
            <Search placeholder={'Buscar monitor'} />
            <View style={styles.list}>
                <FlatList 
                    data={monitores}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.nome}

                />
            </View>
        </View>
    )
}