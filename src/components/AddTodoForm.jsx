import React, { useState } from 'react';
import styles from './AddTodoForm.module.css';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// This component will receive a function 'onAddTask' as a prop
const AddTodoForm = ({ onAddTask }) => {
	// State to hold the current value of the input field
	const [taskText, setTaskText] = useState('');
	const [selectedDate, setSelectedDate] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submission behavior (page reload)

		if (taskText.trim()) {
			// Format the selectedDate to YYYY-MM-DD string or keep null
			const formattedDueDate = selectedDate
				? format(selectedDate, 'yyyy-MM-dd')
				: null;
			onAddTask(taskText, formattedDueDate); // Pass both text and formattedDueDate
			setTaskText(''); // Clear the text input
			setSelectedDate(null); // Clear the date picker
		}
	};
	return (
		<form className={styles['add-todo-form']} onSubmit={handleSubmit}>
			{/* The input field's value is tied to the taskText state, and its
      onChange handler updates that state. This is known as a "controlled
      component" in React, where React state is the "single source of truth" for
      form input values. */}
			<input
				type='text'
				className={styles['task-input']}
				placeholder='Add a new task...'
				value={taskText} // Input value is controlled by our state 'taskText'
				onChange={(e) => setTaskText(e.target.value)} // Update state on every input change
			/>
			<DatePicker
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date)}
				className={styles['date-picker-input']}
				dateFormat='yyyy-MM-dd' // Display format in the input field
				placeholderText='Due Date (optional)'
				isClearable // Allows clearing the selected date
				popperPlacement='top-end'
			/>
			<button type='submit' className={styles['add-button']}>
				Add Task
			</button>
		</form>
	);
};

export default AddTodoForm;
