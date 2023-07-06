import React from 'react';

interface TaskProps {
  task: {
    id: string;
    title: string;
  };
  removeTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, removeTask }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;