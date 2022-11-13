import { Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import { IconButton, List } from 'react-native-paper';
import { styles } from './contato-monitor.style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ExternalLinkUtils } from '../../utils/external-links.utils';

export const ContatoMonitorPage = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const handlePhoneTap = (phone: string) => {
      ExternalLinkUtils.callPhone(phone);
    };

    const handleWhatsappTap = (phone: string) => {
      ExternalLinkUtils.openWhatsapp(phone);
    };

    const handleEmailTap = (email: string) => {
      ExternalLinkUtils.sendEmail(email);
    };
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
            <Image style={styles.image} source={{uri: route.params?.img}} />

            <View><Text style={styles.text}>{route.params?.nome}</Text></View>
            <List.Item title="Chats" onPress={() => {}} />
            <List.Item title="Telefone" onPress={() => handlePhoneTap(route.params?.contato)} />
            <List.Item title="Whatsapp" onPress={() => handleWhatsappTap(route.params?.contato)} />
            <List.Item title="Email" onPress={() => {}} />
        </View>
      </SafeAreaView>
    )
}