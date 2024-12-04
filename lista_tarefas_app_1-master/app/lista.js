import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { Link } from 'expo-router';
import Configuracao from './configuracao'; // Importando a página de configuração

export default function Lista() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: 'Entregar escopo', realizada: true },
    { id: 2, nome: 'Entregar wireframe', realizada: true },
    { id: 3, nome: 'Entregar layout', realizada: true },
    { id: 4, nome: 'Entregar app', realizada: true },
  ]);

  const marcarComoRealizada = (id) => {
    setTarefas(prevTarefas =>
      prevTarefas.map(tarefa => {
        if (tarefa.id === id) {
          const novaRealizada = !tarefa.realizada;
          Alert.alert(novaRealizada ? "Tarefa não realizada" : "Tarefa realizada");
          return { ...tarefa, realizada: novaRealizada };
        }
        return tarefa;
      })
    );
  };

  const removerTarefa = (id) => {
    setTarefas(prevTarefas => {
      const novasTarefas = prevTarefas.filter(tarefa => tarefa.id !== id);
      Alert.alert("Tarefa removida");
      return novasTarefas;
    });
  };

  const addTarefa = (nome) => {
    const novaTarefa = { id: tarefas.length + 1, nome, realizada: false };
    setTarefas(prevTarefas => [...prevTarefas, novaTarefa]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cabecalho}>
          <Text style={styles.title}>Lista de Tarefas</Text>
        </View>
        <View style={styles.conteudo}>
          {tarefas.map(tarefa => (
            <View key={tarefa.id} style={styles.botao}>
              <Text style={styles.entrega}>{tarefa.nome}</Text>
              <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.verde} onPress={() => marcarComoRealizada(tarefa.id)}>
                  <Image source={tarefa.realizada ? require("../assets/black.png") : require("../assets/green.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lixeira} onPress={() => removerTarefa(tarefa.id)}>
                  <Image source={require("../assets/Remove.png")} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.rodape}>
        <Link href="/configuracao" params={{ addTarefa }}> {/* Passando a função addTarefa como parâmetro */}
          <Image style={styles.icone} source={require("../assets/Sum.png")} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  scrollContainer: {
    paddingBottom: 60, // Espaço para o rodapé
  },
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
    flex: 1,
    backgroundColor: '#515151',
    alignItems: 'center',
    paddingVertical: 20,
  },
  botao: {
    backgroundColor: 'white',
    marginVertical: 10,
    height: 60,
    width: '90%',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 3, // Sombra para dar profundidade
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rodape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#001BC8',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
  },
  icone: {
    marginTop: 10,
  },
  entrega: {
    fontSize: 18,
    color: '#333', // Cor do texto
  },
  verde: {
    marginLeft: 10,
  },
  lixeira: {
    marginLeft: 10,
  },
});
