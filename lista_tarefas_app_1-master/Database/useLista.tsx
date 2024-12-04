import { useEffect, useState } from 'react';
import db from './inicializeDatabase';

export const useLista = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    // Carregar tarefas ao iniciar
    loadTarefas();
  }, []);

  const loadTarefas = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tarefas;',
        [],
        (_, { rows }) => {
          setTarefas(rows._array);
        },
        (tx, error) => {
          console.error('Erro ao carregar tarefas:', error);
        }
      );
    });
  };

  const addTarefa = (nome) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO tarefas (nome, realizada) VALUES (?, ?);',
        [nome, 0],
        () => {
          loadTarefas(); // Recarregar tarefas após adicionar
        },
        (tx, error) => {
          console.error('Erro ao adicionar tarefa:', error);
        }
      );
    });
  };

  const removeTarefa = (id) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM tarefas WHERE id = ?;',
        [id],
        () => {
          loadTarefas(); // Recarregar tarefas após remover
        },
        (tx, error) => {
          console.error('Erro ao remover tarefa:', error);
        }
      );
    });
  };

  return {
    tarefas,
    addTarefa,
    removeTarefa,
  };
};
