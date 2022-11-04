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
    const [search, setSearch] = React.useState<string>('');

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    const navigation = useNavigation();

    const handleInfoMonitor = (item: any) => {
      navigation.navigate('InfoMonitorPage', {nome: item.name, contato: item.contato, email: item.email});
    };

    useEffect(() => {
        fetch(`https://fake-server-monitor.herokuapp.com/monitores?name_like=${search}`)
        .then(response => response.json())
        .then((data) => {
          setMonitores(data)
        })
      }, []);

      const renderItem = ({ item }: any) => (
        <View>
          <Accordion name={item.name} onTapItem={() => handleInfoMonitor(item)}  />
          <Divider />
        </View>
      );
      
    return (
        <View style={styles.container}>
            <Header title={'Monitorando Monitor'} />
            <Divider />
            <Search placeholder={'Buscar monitor'} />
            <View style={styles.list}>
                <FlatList 
                    data={monitores}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                />
            </View>
        </View>
    )
}