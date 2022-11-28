import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { Button, View, Text, Image, TouchableOpacity } from "react-native";
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

    const handleHomePage = (item: any) => {
        navigation.navigate('Home', {nome: item.name});
    };
      
    return (
        <View>
            <Image style={styles.logo} source={{uri: "../../../assets/logo.png"}} />
            <View style={styles.content}>
                <InputComponent placeholder="Email" value={email} onChangeText={setEmail}/>
                <InputComponent placeholder="Senha" value={password} onChangeText={setPassword} />
                {/* {users.map(user => {user.email === email && user.password === password})} */}
                <TouchableOpacity style={styles.button} onPress={() => handleHomePage(users)}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text>Esqueci minha senha</Text>
            </View>
        </View>
    )
}