import * as React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import {styles} from "./header.style"

interface HeaderProps{
    title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>{props.title}</Title>
    </View>
  );
};
