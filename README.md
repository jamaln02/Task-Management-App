# Task Management System


## Introduction

The Task Management System is a web application built using React and Redux for managing user tasks. This system allows users to register, log in, add, edit, delete tasks, and toggle task completion status. Each user can see only their own tasks.

## Features

- User registration
- Login and logout
- Add, edit, and delete tasks
- Filter tasks based on their completion status
- Store tasks in Local Storage for each user separately
- Use Redux for state management across the application

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/jamaln02/Task-Management-App.git
   cd task-management

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173] in your browser to see the application.

## Project Structure

```
Task-Management-App/
├── src/
│  │
│  ├── logSystem/
│  │   ├── Login.jsx
│  │   └── Register.jsx
│  │
│  ├── redux-system/
│  │   ├── slices/
│  │   │   ├── userSlice.jsx
│  │   └── store.jsx
│  │
│  ├── TaskComponent/
│  │   ├── TaskEdit.jsx
│  │   ├── TaskForm.jsx
│  │   ├── TaskItem.jsx
│  │   └── TaskList.jsx
│  │  
│  ├── App.jsx
│  ├── Header.jsx
│  ├── Home.jsx
│  ├── index.css
│  └── main.jsx
│
├── index.html
├── tailwind.config.js
├── vite.config.js
└── README.md


```


## Components

- **App.jsx** : The main component that sets up routing and renders other components.
- **Header.jsx** : Displays the navigation header with login, register, and logout options.
- **Home.jsx** : The home page that displays the task list and provides options to add, edit, and delete tasks.
- **TaskList.jsx** : Displays the list of tasks for the current user.
- **TaskItem.jsx** : Represents a single task item.
- **TaskForm.jsx** : A form to add tasks.
- **TaskEdit.jsx** : A page to edit a specific task.
- **Login.jsx** : A page for user login.
- **Register.jsx** : A page for user registration.


## How It Works

1. **User Registration**: Users can register by providing their username, password, and email. The registration information is stored in the `users` slice.
2. **User Login**: Users can log in using their credentials. The `currentUser` in the `users` slice is set to the logged-in user's information.
3. **Task Management**: Logged-in users can add, edit, delete, and toggle the completion status of their tasks. Tasks are stored under the corresponding user in the `users` slice.
4. **Data Persistence**: The application state, including users and tasks, is persisted in Local Storage using `redux-persist`.


## Author

- **Jamal Nabaa**
#
