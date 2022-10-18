import * as React from 'react';
import { List } from 'react-native-paper';
import {styles} from "./list-item.style"

interface ListItemProps{
    name: string;
}

export const ListItem = (props: ListItemProps) => {
  return (
      <List.Accordion
        style={styles.items}
        title={props.name}
        left={props => <List.Icon {...props} icon="circle" />}>
        <List.Item title="Horários" onPress={() => {}} />
        <List.Item title="Contatos" onPress={() => {}} />
      </List.Accordion>
  );
};
