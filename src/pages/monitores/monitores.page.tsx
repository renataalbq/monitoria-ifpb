import React from "react"
import { Header } from "../../components/header/header.component"
import {ListItem} from "../../components/list-item/list-item.component"
import {Search} from "../../components/search/search.component"
import { Divider } from 'react-native-paper';
import { View } from "react-native";
import {styles} from "./monitores.style"

export const MonitoresPage = () => {
    return (
        <View>
            <Header title={'Monitorando Monitor'} />
            <Divider />
            <Search placeholder={'Buscar monitor'} />
            <View style={styles.list}>
                <ListItem name={"Aluno 1"} />
                <Divider />
                <ListItem name={"Aluno 2"} />
                <Divider />
                <ListItem name={"Aluno 3"} />
                <Divider />
            </View>
        </View>
    )
}