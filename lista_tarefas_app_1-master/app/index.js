import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.title}>Lista de tarefas</Text>
      </View>
      <View style={styles.conteudo}>
        <View style={styles.botao}>
          <Link href="/lista" asChild>
              <Text style={styles.buttonText}>Visualizar minhas tarefas</Text>
          </Link>
        </View>
      </View>
      <View style={styles.rodape}>
        <Link href="/configuracao">
          <Image style={styles.icone} source={require("../assets/Sum.png")}/>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    height: 50,
    backgroundColor: '#001BC8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
  },
  conteudo: {
    height: 720,
    display: 'flex',
    backgroundColor: '#515151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  botao: {
    backgroundColor: '#001BC8',
    marginTop: 70,
    height: 70,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  rodape: {
    backgroundColor: '#001BC8',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
  },
  icone: {
    marginTop: 10,
  },
});