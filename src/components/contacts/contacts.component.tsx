
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from "./contacts.style";

interface ContactsComponentProps {
    contact: string;
    icon: string;
    action: () => void;
}

export const ContactsComponent = (props: ContactsComponentProps) => {
  return (
    <TouchableOpacity style={styles.row} onPress={props.action}>
              <MaterialIcons
                    name={props.icon}
                    size={24}
                    color={ '#000000'}
                  />
              <Text style={styles.textContact}>{props.contact}</Text>
    </TouchableOpacity>
  );
};
