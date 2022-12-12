import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { InputComponent } from "../../components/input/input.component";
import { styles } from "./login.style";
import Logo from "../../../assets/logo1.png";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();

  const navigation = useNavigation();

  const handleHomePage = async (item: any) => {
    if (email.match(/@academico.ifpb.edu.br/g)) {
      navigation.navigate("Home");
    } else {
      return Alert.alert("Por favor, entre com o email seu email acadêmico.");
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.backgroundLogo}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.content}>
        <InputComponent
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <InputComponent
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleHomePage(users)}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text>Esqueci minha senha</Text>
      </View>
    </View>
  );
}
