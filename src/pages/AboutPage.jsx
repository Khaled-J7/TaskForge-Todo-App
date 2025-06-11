// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
	return (
		<div className={styles['about-container']}>
			<h2 className={styles['about-title']}>About TaskForge</h2>
			<p className={styles['about-intro']}>
				TaskForge is a modern and intuitive todo list application designed to
				help you stay organized and boost your productivity. Built with
				cutting-edge web technologies, it offers a seamless experience for
				managing your daily tasks.
			</p>

			{/* New Section: Key Features */}
			<div className={styles['feature-card']}>
				<h3 className={styles['card-title']}>Key Features:</h3>
				<ul className={styles['feature-list']}>
					<li>
						<span className={styles['key-title']}>
							Persistent Task Storage:
						</span>{' '}
						Your tasks are automatically saved locally in your browser, so
						they're always there when you return.
					</li>
					<li>
						<span className={styles['key-title']}>
							Effortless Task Creation:
						</span>{' '}
						Quickly add new tasks with an intuitive input form.
					</li>
					<li>
						<span className={styles['key-title']}>Due Date Management:</span>{' '}
						Assign due dates to tasks using an integrated date picker.
					</li>
					<li>
						<span className={styles['key-title']}>Creation Date Tracking:</span>{' '}
						Automatically records when each task was created.
					</li>
					<li>
						<span className={styles['key-title']}>Task Completion Toggle:</span>{' '}
						Mark tasks as complete or incomplete with a single click.
					</li>
					<li>
						<span className={styles['key-title']}>Instant Task Deletion:</span>{' '}
						Remove individual tasks with ease.
					</li>
					<li>
						<span className={styles['key-title']}>Clear Completed Tasks:</span>{' '}
						One-click option to clear all finished tasks.
					</li>
					<li>
						<span className={styles['key-title']}>Dynamic Task Filtering:</span>{' '}
						Filter tasks by "All", "Active", "Completed", and "Overdue" status.
					</li>
					<li>
						<span className={styles['key-title']}>"Today" View:</span> See only
						tasks due on the current day.
					</li>
					<li>
						<span className={styles['key-title']}>
							Real-time Weather Display:
						</span>{' '}
						Stay informed with a horizontally scrolling 7-day weather forecast
						and current weather conditions in the navigation bar.
					</li>
				</ul>
			</div>

			{/* Updated Section: Technologies Used */}
			<div className={styles['tech-stack-card']}>
				<h3 className={styles['card-title']}>Technologies Used:</h3>
				<ul className={styles['tech-list']}>
					<li>
						<span className={styles['key-title']}>React:</span> A powerful
						JavaScript library for building user interfaces.
					</li>
					<li>
						<span className={styles['key-title']}>Vite:</span> A lightning-fast
						build tool for modern web projects.
					</li>
					<li>
						<span className={styles['key-title']}>React Router DOM:</span> For
						declarative client-side routing within the application.
					</li>
					<li>
						<span className={styles['key-title']}>`date-fns`:</span> A modern
						JavaScript date utility library for robust date parsing and
						formatting.
					</li>
					<li>
						<span className={styles['key-title']}>`react-datepicker`:</span> A
						flexible and customizable date picker component for user input.
					</li>
					<li>
						<span className={styles['key-title']}>`axios`:</span> A
						promise-based HTTP client for making efficient API requests (e.g.,
						to Open-Meteo for weather data).
					</li>
					<li>
						<span className={styles['key-title']}>Custom CSS Modules:</span> For
						component-scoped and modular styling, ensuring clean and
						maintainable stylesheets.
					</li>
				</ul>
			</div>

			<p className={styles['developer-info']}>
				Developed by:{' '}
				<span className={styles['developer-name-gradient']}>
					Khaled Jallouli
				</span>
			</p>

			{/* --- NEW: Enhanced Project Structure Section --- */}
			<div className={styles['project-structure-card']}>
				<h3 className={styles['card-title']}>Project Architecture:</h3>
				<ul className={styles['tech-list']}>
					{' '}
					{/* Reusing tech-list styling for consistency */}
					<li>
						<span className={styles['key-title']}>`src/App.jsx`:</span> The
						central application component responsible for state management
						(tasks), routing, and providing props to child pages.
					</li>
					<li>
						<span className={styles['key-title']}>`src/pages/`:</span> Contains
						top-level components that represent distinct views or pages of the
						application (e.g., `HomePage`, `TodayPage`, `AboutPage`).
					</li>
					<li>
						<span className={styles['key-title']}>`src/components/`:</span>{' '}
						Houses smaller, reusable UI components that can be composed to build
						pages (e.g., `Navbar`, `TodoList`, `TodoItem`, `AddTodoForm`,
						`WeatherWidget`, `CurrentWeatherDisplay`).
					</li>
					<li>
						<span className={styles['key-title']}>`src/utils/`:</span> Dedicated
						to pure helper functions that perform common tasks (e.g., date
						formatting, unique ID generation).
					</li>
					<li>
						<span className={styles['key-title']}>`src/services/`:</span>{' '}
						Encapsulates logic for interacting with external APIs (e.g.,
						`weatherService.js`), keeping API calls separate from UI components.
					</li>
					<li>
						<span className={styles['key-title']}>CSS Modules:</span> Used for
						component-level styling, ensuring styles are scoped and preventing
						conflicts.
					</li>
					<li>
						<span className={styles['key-title']}>`localStorage`:</span>{' '}
						Utilized for persistent data storage, making the application state
						durable across browser sessions.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AboutPage;
