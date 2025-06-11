// src/pages/TodayPage.jsx
import React from 'react';
import TodoList from '../components/TodoList';
import styles from './TodayPage.module.css';
import { isSameDay, parseISO } from 'date-fns';

// TodayPage now receives tasks, onToggleComplete, and onDeleteTask as props from App.jsx
const TodayPage = ({ tasks, onToggleComplete, onDeleteTask }) => {
	// Get the current date
	const today = new Date();

	// Filter tasks to show only those with a dueDate that is today
	const todaysTasks = tasks.filter((task) => {
		// A task is "today" if it has a dueDate AND that dueDate is the same calendar day as today
		if (task.dueDate) {
			const dueDateObj = parseISO(task.dueDate); // Parse the stored date string into a Date object
			return isSameDay(dueDateObj, today); // Check if the due date is the same calendar day as today
		}
		return false; // If there's no dueDate, it's not a "today" task
	});

	return (
		<div className={styles['today-page-container']}>
			<h2 className={styles['page-title']}>Today's Tasks</h2>
			<TodoList
				tasks={todaysTasks} // Pass the filtered 'todaysTasks'
				onToggleComplete={onToggleComplete}
				onDeleteTask={onDeleteTask}
			/>
		</div>
	);
};

export default TodayPage;
