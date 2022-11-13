import * as React from 'react';
import { List } from 'react-native-paper';
import {styles} from "./accordion.style"
import {Image, TouchableOpacity, Text, View} from 'react-native';
import AvatarMonitor from '../../../assets/avatar.jpg';
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
        right={propsRight => <View style={{backgroundColor: "aquamarine", width: 50, height: 20, borderRadius: 10, marginRight: 10}}><Text style={{textAlign: "center"}}>{props.curso}</Text></View>}
        left={propsLeft => <Image style={styles.image} {...propsLeft} source={{uri: props.avatar}} />}>
        {props.disciplina && <Text>Curso: {props.disciplina} </Text>}        
        <TouchableOpacity  onPress={() => {props.onTapHorarios()}}>
          <View style={styles.row}>
            <Text style={styles.textButton}>Horários</Text>
            <MaterialIcons
                  name="chevron-right"
                  size={24}
                  color={ '#001a9b'}
                />
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => {props.onTapContatos()}}>
          <View style={styles.row}>
            <Text style={styles.textButton}>Contatos</Text>
            <MaterialIcons
                  name="chevron-right"
                  size={24}
                  col3or={ '#001a9b'}
                />
          </View>
        </TouchableOpacity>
      </List.Accordion>
  );
};
