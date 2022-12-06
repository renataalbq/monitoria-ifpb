import { Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { IconButton, List } from 'react-native-paper';
import { styles } from './contato-monitor.style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ExternalLinkUtils } from '../../utils/external-links.utils';
import { MaterialIcons } from '@expo/vector-icons';
import { ContactsComponent } from '../../components/contacts/contacts.component';

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
        <View style={styles.background}>
            <Image style={styles.image} source={{uri: route.params?.img}} />
            <View style={styles.cursoBg}>
              <Text style={styles.curso}>{route.params?.curso}</Text>
            </View>
            <Text style={styles.text}>{route.params?.nome}</Text>
        </View>
        <View style={styles.list}>

            <ContactsComponent contact={'Chats'} icon={'chat-bubble'} action={() => {}} />
            <ContactsComponent contact={'Telefone'} icon={'phone'} action={() => handlePhoneTap(route.params?.contato)} />
            <ContactsComponent contact={'Whatsapp'} icon={'phone'} action={() => handleWhatsappTap(route.params?.contato)} />
            <ContactsComponent contact={'Email'} icon={'email'} action={() => handlePhoneTap(route.params?.contato)} />

        </View>
      </SafeAreaView>
    )
}