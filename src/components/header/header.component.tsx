import * as React from "react";
import { View, Image } from "react-native";
import { Title } from "react-native-paper";
import { styles } from "./header.style";
import Logo from "../../../assets/logo1.png";

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Title style={styles.title}>{props.title}</Title>
    </View>
  );
};
