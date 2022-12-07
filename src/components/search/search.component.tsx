import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import {styles} from "./search.style"

type SearchProps = TextInputProps;

export const Search = ({
  ...textInputProps
}: SearchProps) => {

    return (
      <TextInput {...textInputProps}
        style={styles.search}
        underlineColorAndroid="transparent"
      />
    );
}