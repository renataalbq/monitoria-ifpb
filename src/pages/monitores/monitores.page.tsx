import React from "react"
import { Header } from "../../components/header/header.component"
import {Accordion} from "../../components/accordion/accordion.component"
import {Search} from "../../components/search/search.component"
import { Divider } from 'react-native-paper';
import { View } from "react-native";
import {styles} from "./monitores.style"

export const MonitoresPage = () => {
    return (
        <View style={styles.container}>
            <Header title={'Monitorando Monitor'} />
            <Divider />
            <Search placeholder={'Buscar monitor'} />
            <View style={styles.list}>
                <Accordion name={"Aluno 1"} />
                <Divider />
                <Accordion name={"Aluno 2"} />
                <Divider />
                <Accordion name={"Aluno 3"} />
                <Divider />
            </View>
        </View>
    )
}