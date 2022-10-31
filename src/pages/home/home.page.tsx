import React from "react"
import { Header } from "../../components/header/header.component"
import { Divider } from 'react-native-paper';
import { Button, View } from "react-native";

export function HomePage() {
    
    return (
        <View>
            <Header title={'Monitorando Monitor'} />
            <Divider />
        </View>
    )
}