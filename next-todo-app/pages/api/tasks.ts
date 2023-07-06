import { NextApiRequest, NextApiResponse } from 'next';

interface Task {
  id: string;
  title: string;
}

let tasks: Task[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(tasks);
      break;
    case 'POST':
      const newTask: Task = req.body;
      tasks.push(newTask);
      res.status(201).json(newTask);
      break;
    case 'DELETE':
      const { id } = req.body;
      tasks = tasks.filter(task => task.id !== id);
      res.status(200).json({ id });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}