import React from 'react';
import Task from './Task';
import { Task as TaskType } from '../pages/index';

interface TaskListProps {
  tasks: TaskType[];
  removeTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, removeTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} removeTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;