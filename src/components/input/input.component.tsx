
import React from 'react';
import {View, TextInputProps, TextInput, Text} from 'react-native';
import {styles} from "./input.style";

export type InputComponentProps = TextInputProps & {
  errorMessage?: string | null;
  isValid?: boolean;
};

export const InputComponent = ({
  errorMessage,
  isValid,
  ...textInputProps
}: InputComponentProps) => {
  return (
    <View>
      <TextInput {...textInputProps} style={styles.input} />
      <Text style={styles.caption}>{!isValid && errorMessage}</Text>
    </View>
  );
};
