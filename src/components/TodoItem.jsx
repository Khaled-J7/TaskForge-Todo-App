// src/components/TodoItem.jsx
import React from 'react';
import styles from './TodoItem.module.css';
import { formatDisplayDate } from '../utils/utils';

const TodoItem = ({ task, onToggleComplete, onDeleteTask }) => {
	// Helper for display dates (can be inline for now)
	const displayCreatedDate = formatDisplayDate(task.createdDate);
	const displayDueDate = formatDisplayDate(task.dueDate);

	return (
		<li
			className={`${styles['todo-item']} ${
				task.completed ? styles.completed : ''
			}`}
		>
			<div className={styles['task-content']}>
				<input
					type='checkbox'
					className={styles['task-checkbox']}
					checked={task.completed}
					onChange={() => onToggleComplete(task.id)}
				/>
				<span className={styles['task-text']}>{task.text}</span>
			</div>

			{/* Default visible date summary (hides on hover) */}
			<div className={styles['task-dates-summary']}>
				{task.dueDate
					? `Due: ${displayDueDate}`
					: `Created: ${displayCreatedDate}`}
			</div>

			{/* Detailed date display (visible only on hover) */}
			<div className={styles['date-details-hover']}>
				<span className={styles['created-date']}>
					Created: {displayCreatedDate}
				</span>
				{task.dueDate && (
					<span className={styles['due-date']}>Due: {displayDueDate}</span>
				)}
			</div>

			<button
				className={styles['delete-button']}
				onClick={() => onDeleteTask(task.id)}
			>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
