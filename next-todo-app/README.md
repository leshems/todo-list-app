# Next.js Todo List App

This is a simple todo list application built with Next.js and TypeScript.

## Tech Stack

- Next.js: A React framework for server-side rendering and routing.
- TypeScript: A statically typed superset of JavaScript that adds types and provides a better developer experience.

## Features

- Add tasks: Users can add tasks to the todo list.
- Remove tasks: Users can remove tasks from the todo list.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/index.tsx`: This is the main page of the application. It contains the logic for adding and removing tasks.
- `pages/api/tasks.ts`: This file contains the API routes for tasks.
- `components/AddTask.tsx`: This component provides the form to add new tasks.
- `components/TaskList.tsx`: This component displays the list of tasks.
- `components/Task.tsx`: This component represents a single task in the list.
- `styles/globals.css`: This file contains global styles.
- `styles/Home.module.css`: This file contains styles specific to the Home component.
- `public/favicon.ico`: This is the favicon for the application.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `.next` folder.

### `npm start`

Starts the production server.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!