import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { InputComponent } from "../../components/input/input.component";
import {styles} from "./login.style";

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('https://fake-server-monitor.herokuapp.com/login')
        .then(response => response.json())
        .then((data) => {
          setUsers(data)
        })
      }, []);

    const navigation = useNavigation();

    const handleHomePage = async (item: any) => {
        if (email.match(/@academico.ifpb.edu.br/g) && password){
            navigation.navigate('Home', {nome: item.name});
        } else {
            return Alert.alert('Verifique os campos.')
        }
    };
      
    return (
        <View>
            <Image style={styles.logo} source={{uri: "../../../assets/logo.png"}} />
            <View style={styles.content}>
                <InputComponent placeholder="Email" value={email} onChangeText={setEmail}/>
                <InputComponent placeholder="Senha" value={password} onChangeText={setPassword} />
                <TouchableOpacity style={styles.button} onPress={() => handleHomePage(users)}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text>Esqueci minha senha</Text>
            </View>
        </View>
    )
}