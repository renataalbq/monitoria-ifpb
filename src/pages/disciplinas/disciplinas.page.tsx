import React from "react"
import { Header } from "../../components/header/header.component"
import {Search} from "../../components/search/search.component"
import { Divider, List } from 'react-native-paper';
import { View } from "react-native";
import {styles} from "./disciplinas.style"

export const DisciplinasPage = () => {
    return (
        <View>
            <Header title={'Monitorando Monitor'} />
            <Divider />
            <Search placeholder={'Buscar disciplinas'} />
            <View style={styles.list}>
                <List.Item title="Estrutura de dados" />
                <Divider />
                <List.Item title="Análise e Projeto de Sistemas" />
                <Divider />
                <List.Item title="Programação para Web 1" />
                <Divider />
            </View>
        </View>
    )
}