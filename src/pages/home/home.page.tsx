import React from "react";
import { Header } from "../../components/header/header.component";
import { Divider } from "react-native-paper";
import { View, Text } from "react-native";
import { styles } from "./home.style";

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header title={"Monitorando Monitor"} />
        <Divider />
      </View>

      <View style={styles.content}>
        <Text style={styles.hello}>Olá, Aluno!</Text>
        <Text style={styles.welcome}>
          Bem vindo ao app de monitoria do IFPB!
        </Text>
        <Text style={styles.welcome}>
          Aqui você encontra todos os monitores do instituto num lugar só.{" "}
        </Text>
      </View>
    </View>
  );
};
