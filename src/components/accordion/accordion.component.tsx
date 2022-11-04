import * as React from 'react';
import { List } from 'react-native-paper';
import {styles} from "./accordion.style"

interface ListItemProps{
    name: string;
    onTapItem: () => void;
}

export const Accordion = (props: ListItemProps) => {
  return (
      <List.Accordion
        style={styles.items}
        title={props.name}
        left={props => <List.Icon {...props} icon="circle" />}>
        <List.Item title="Horários" onPress={() => {props.onTapItem()}} />
        <List.Item title="Contatos" onPress={() => {props.onTapItem()}} />
      </List.Accordion>
  );
};
