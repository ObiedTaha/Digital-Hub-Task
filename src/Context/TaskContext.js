import React, { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("Tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (newTask) => {
    // Create a unique ID for the new task
    const taskWithId = { ...newTask, id: Date.now() };
    const updatedTasks = [...tasks, taskWithId];
    setTasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  };

  const updateTask = (id, task) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, ...task } : item
    );
    setTasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
