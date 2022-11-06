import { Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import { IconButton, List } from 'react-native-paper';
import { styles } from './contato-monitor.style';
import { useNavigation, useRoute } from '@react-navigation/native';
import AvatarMonitor from '../../../assets/avatar.jpg';


export const ContatoMonitorPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
            <Image style={styles.image} source={AvatarMonitor} />

            <View><Text style={styles.text}>{route.params?.nome}</Text></View>
            <List.Item title="Chats" onPress={() => {}} />
            <List.Item title="Telefone" onPress={() => {}} />
            <List.Item title="Whatsapp" onPress={() => {}} />
            <List.Item title="Email" onPress={() => {}} />
        </View>
      </SafeAreaView>
    )
}