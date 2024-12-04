import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tarefas.db');

export const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        realizada INTEGER NOT NULL
      );`,
      [],
      () => {
        console.log('Tabela tarefas criada com sucesso.');
      },
      (tx, error) => {
        console.error('Erro ao criar tabela tarefas:', error);
      }
    );
  });
};

export default db;
