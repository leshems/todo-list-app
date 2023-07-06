import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

interface Task {
  id: string;
  title: string;
}

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now().toString(), title };
    setTaskList((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id: string) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Todo List</h1>

        <AddTask onAdd={addTask} />
        <TaskList tasks={taskList} onRemove={removeTask} />
      </main>
    </div>
  );
}