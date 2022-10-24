import * as React from 'react';
import { Title } from 'react-native-paper';
import {styles} from "./header.style"

interface HeaderProps{
    title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <Title style={styles.title}>{props.title}</Title>
  );
};
