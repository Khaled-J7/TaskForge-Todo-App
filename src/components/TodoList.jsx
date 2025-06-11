import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ tasks, onToggleComplete, onDeleteTask }) => {
	// This component will receive 'tasks' as a prop
	return (
		<ul className={styles['todo-list']}>
			{tasks.map((task) => (
				<TodoItem
					key={task.id}
					task={task}
					onToggleComplete={onToggleComplete}
					onDeleteTask={onDeleteTask}
				/>
			))}
		</ul>
	);
};

export default TodoList;
