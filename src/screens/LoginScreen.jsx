// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import Post from "../components/Post";
// import { auth } from "../config/Firebase";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import SocialScreen from "./SocialScreen";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    console.log(email);
    console.log(senha);
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        navigation.navigate('TabsNavigation');
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          console.log("Usuário não encontrado");
          setError("Usuário não encontrado");
        }
        if (error.code === "auth/wrong-password") {
          console.log("Senha incorreta");
          setError("Senha incorreta");
        }
        if (error.code === "auth/invalid-email") {
          console.log("Email inválido");
          setError("Email inválido");
        }
      });
  }

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Login</Text>
      {error && <Text>{error}</Text>}

      <View style={styles.container}>
        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail..."
          multiline={false}
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          label="Senha"
          secureTextEntry={true}
          placeholder="Digite sua Senha..."
          multiline={false}
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
        />
        <Button mode="outlined" onPress={handleLogin}>
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 100,
  }
});