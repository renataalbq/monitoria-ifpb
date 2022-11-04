import { Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import { IconButton, List } from 'react-native-paper';
import { styles } from './info-monitor.style';
import { useNavigation, useRoute } from '@react-navigation/native';

export const InfoMonitorPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <IconButton style={styles.icon} onPress={() => navigation.goBack()} icon={'chevron-left'}/>
        </View>
        <View style={styles.list}>
            <View style={styles.image}></View>

            <View><Text style={styles.text}>{route.params?.nome}</Text></View>
            <List.Item title="Chats" onPress={() => {}} />
            <List.Item title="Telefone" onPress={() => {}} />
            <List.Item title="Whatsapp" onPress={() => {}} />
            <List.Item title="Email" onPress={() => {}} />
        </View>
      </SafeAreaView>
    )
}