import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { InputComponent } from "../../components/input/input.component";
import {styles} from "./login.style";
import Logo from "../../../assets/logo.png"

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState();

    const navigation = useNavigation();

    const handleHomePage = async (item: any) => {
        if (email.match(/@academico.ifpb.edu.br/g) && password.length > 3){
            navigation.navigate('Home');
        } else {
            return Alert.alert('Verifique os campos.')
        }
    };
      
    return (
        <View>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.content}>
                <InputComponent placeholder="Email" value={email} onChangeText={setEmail}/>
                <InputComponent placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={true} />
                <TouchableOpacity style={styles.button} onPress={() => handleHomePage(users)}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text>Esqueci minha senha</Text>
            </View>
        </View>
    )
}