// src/pages/HomePage.jsx
import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import styles from './HomePage.module.css';
import { parseISO, isPast } from 'date-fns';
import WeatherWidget from '../components/WeatherWidget';

const HomePage = ({
	tasks,
	onAddTask,
	onToggleComplete,
	onDeleteTask,
	onClearCompleted,
}) => {
	const [filter, setFilter] = useState('all');

	const isTaskOverdue = (task) => {
		if (!task.dueDate) return false;
		const dueDateObj = parseISO(task.dueDate);
		return isPast(dueDateObj) && !task.completed;
	};

	const filteredTasks = tasks.filter((task) => {
		switch (filter) {
			case 'active':
				return !task.completed && !isTaskOverdue(task);
			case 'completed':
				return task.completed;
			case 'overdue':
				return isTaskOverdue(task);
			case 'all':
			default:
				return true;
		}
	});

	return (
		<div className={styles['home-page-container']}>
			<h2 className={styles['page-title']}>All Tasks</h2>

			<AddTodoForm onAddTask={onAddTask} />

			<div className={styles['filter-buttons-container']}>
				<button
					onClick={() => setFilter('all')}
					className={`${styles['filter-button']} ${
						filter === 'all' ? styles.active : ''
					}`}
				>
					All
				</button>
				<button
					onClick={() => setFilter('active')}
					className={`${styles['filter-button']} ${
						filter === 'active' ? styles.active : ''
					}`}
				>
					Active
				</button>
				<button
					onClick={() => setFilter('completed')}
					className={`${styles['filter-button']} ${
						filter === 'completed' ? styles.active : ''
					}`}
				>
					Completed
				</button>
				<button
					onClick={() => setFilter('overdue')}
					className={`${styles['filter-button']} ${
						filter === 'overdue' ? styles.active : ''
					}`}
				>
					Overdue
				</button>
			</div>
			
			<WeatherWidget />

			<TodoList
				tasks={filteredTasks}
				onToggleComplete={onToggleComplete}
				onDeleteTask={onDeleteTask}
			/>

			{tasks.some((task) => task.completed) && (
				<button
					onClick={onClearCompleted}
					className={styles['clear-completed-button']}
				>
					Clear Completed
				</button>
			)}
		</div>
	);
};

export default HomePage;
