import React, { useEffect, useState } from "react"
import { Header } from "../../components/header/header.component"
import {Search} from "../../components/search/search.component"
import { Divider, List, Text } from 'react-native-paper';
import { FlatList, TouchableOpacity, View } from "react-native";
import {styles} from "./disciplinas.style"
import { ScrollView } from "react-native-gesture-handler";

export const DisciplinasPage = () => {
    const [disciplinas, setDisciplinas] = useState();
    const [search, setSearch] = React.useState<string>('');

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    useEffect(() => {
        fetch(`https://fake-server-monitor.herokuapp.com/disciplinas?titulo_like=${search}`)
        .then(response => response.json())
        .then((data) => {
          setDisciplinas(data)
        })
      }, []);

      const renderItem = ({ item }: any) => (
        <View>
          <View style={styles.item}>
            <Text>{item.titulo} - {item.curso}</Text>
          </View>
          <Divider />
        </View>
      );


    return (
        <View style={styles.container}>
            <Header title={'Monitorando Monitor'} />
            <Divider />
            <Search placeholder={'Buscar disciplinas'}  />
            <View style={styles.list}>
                <FlatList 
                    data={disciplinas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                />
            </View>
        </View>
    )
}