import * as React from 'react';
import { List } from 'react-native-paper';
import {styles} from "./accordion.style"
import {Image, TouchableOpacity, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ListItemProps{
    name: string;
    disciplina?: string;
    onTapContatos: () => void;
    onTapHorarios: () => void;
    avatar: string;
    curso: string;
}

export const Accordion = (props: ListItemProps) => {
  return (
      <List.Accordion
        style={styles.items}
        title={props.name}
        titleStyle={{color: '#116000'}}
        right={propsRight => <View style={styles.badge}><Text style={styles.textBadge}>{props.curso}</Text></View>}
        left={propsLeft => <Image style={styles.image} {...propsLeft} source={{uri: props.avatar}} />}>
        <TouchableOpacity style={styles.accordionButton}  onPress={() => {props.onTapHorarios()}}>
          <View style={styles.row}>
            <Text style={styles.textButton}>Horários</Text>
            <MaterialIcons
                  name="chevron-right"
                  size={24}
                  color={ '#001a9b'}
                  style={{paddingTop: 10}}
                />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accordionButton}  onPress={() => {props.onTapContatos()}}>
          <View style={styles.row}>
            <Text style={styles.textButton}>Contatos</Text>
            <MaterialIcons
                  name="chevron-right"
                  size={24}
                  color={ '#001a9b'}
                  style={{paddingTop: 10}}
                />
          </View>
        </TouchableOpacity>
      </List.Accordion>
  );
};
