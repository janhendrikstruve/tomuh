import React from 'react';
import styles from './Todo.module.css';

type TodoProps = {
  isDone: boolean;
  title: string;
  description: string;
};

function Todo(props: TodoProps): JSX.Element {
  return (
    <div
      className={`${styles.todo} ${props.isDone ? styles.green : styles.red}`}
    >
      <h2>{props.title}</h2>
      <span>{props.description}</span>
    </div>
  );
}

export default Todo;
