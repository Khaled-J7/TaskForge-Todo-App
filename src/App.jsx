// src/App.jsx
import React, { useState, useEffect } from 'react'; // Import useState hook and useEffect
import './index.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodayPage from './pages/TodayPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import { getTodayDate } from './utils/utils'; // Import getTodayDate from utils

const App = () => {
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem('taskforge_tasks');
		// If tasks are found in localStorage, parse them.
		// Otherwise, return an empty array. We no longer use hardcoded initial tasks here
		// to ensure a clean start with the new date structure.
		return savedTasks ? JSON.parse(savedTasks) : [];
	});

	const addTask = (text, dueDate = null) => {
		// 1. Create a new task object
		const newTask = {
			// 1.a Generate a unique ID for the new task
			id: tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
			// 1.b Assign the text provided to the new task
			text: text,
			completed: false,
			createdDate: getTodayDate(), // Automatically set creation date
			dueDate: dueDate, // Set due date from the form (can be null)
		};
		// 2. Update the state of tasks by adding a new task.
		// This creates a NEW array to trigger React's re-render.
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};

	// --- FUNCTION: Toggles the 'completed' status of a task ---
	// This function changes a task's completed status (false to true, or true to false) when its checkbox is clicked
	const toggleComplete = (id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	// --- FUNCTION: Deletes a task by its ID ---
	const deleteTask = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	// --- NEW FUNCTION: Clears all completed tasks ---
	const clearCompleted = () => {
		setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
	};

	// --- useEffect to save tasks to localStorage ---
	// This effect runs every time the 'tasks' array changes, saving the updated list.
	useEffect(() => {
		localStorage.setItem('taskforge_tasks', JSON.stringify(tasks));
	}, [tasks]); // <-- Dependency array: Effect runs only when 'tasks' changes

	return (
		<Layout>
			<Routes>
				<Route
					path='/'
					element={
						<HomePage
							tasks={tasks}
							onAddTask={addTask}
							onToggleComplete={toggleComplete}
							onDeleteTask={deleteTask}
							onClearCompleted={clearCompleted}
						/>
					}
				/>
				<Route
					path='/today'
					element={
						<TodayPage
							tasks={tasks}
							onToggleComplete={toggleComplete}
							onDeleteTask={deleteTask}
						/>
					}
				/>
				<Route path='/about' element={<AboutPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Layout>
	);
};

export default App;
