import React from "react"
import { Header } from "../../components/header/header.component"
import { Divider } from 'react-native-paper';
import { Button, View } from "react-native";

export function HomePage({ navigation }) {
    
    return (
        <View>
            <Header title={'Monitorando Monitor'} />
            <Divider />
            <View>
                <Button title="Buscar monitores" onPress={() => navigation.navigate('MonitoresPage')} />
                <Button title="Buscar disciplinas" />
            </View>
        </View>
    )
}