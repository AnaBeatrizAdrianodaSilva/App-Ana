// import { createUserWithEmailAndPassword } from "firebase/auth";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function CadastrarScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrarPessoa() {
    console.log(nome);
    console.log(email);

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // adicionar o usuário a coleção Users usando o uid do usuário como chave estrangeira
        const docRef = addDoc(collection(db, "Users"), {
          nome: nome,
          email: email,
          senha: senha,
          uid: user.uid,
        }).then(() => {
          navigation.navigate("Login");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <View style={styles.body}>
      <Text style={styles.title}>
        Cadastrar
      </Text>

      <View style={styles.container}>
        <TextInput
          label="Nome"
          placeholder="Digite seu nome..."
          multiline={false}
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
  
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
  
        <Button mode="outlined" onPress={cadastrarPessoa}>
          Cadastrar-se
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