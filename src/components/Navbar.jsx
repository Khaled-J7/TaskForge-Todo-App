// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TaskForgeLogo from '../assets/TaskForgeLogo.png';
import styles from './Navbar.module.css';
import CurrentWeatherDisplay from './CurrentWeatherDisplay';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles['nav-container']}>
				{/* Logo and App Title */}
				<Link to='/' className={styles['brand-link']}>
					<img
						src={TaskForgeLogo}
						alt='TaskForge Logo'
						className={styles.logo}
					/>
					<span className={styles['app-title']}>TaskForge</span>
				</Link>

				{/* Desktop Navigation Links */}
				<div className={styles['nav-links-group']}>
					<Link to='/' className={styles['nav-link']}>
						All Tasks
					</Link>
					{/* Group Today link with CurrentWeatherDisplay for basic vertical stack */}
					<div className={styles['today-nav-item']}>
						{/* New container for Today + Weather */}
						<Link to='/today' className={styles['nav-link']}>
							Today
						</Link>
						<CurrentWeatherDisplay /> {/* Render CurrentWeatherDisplay here */}
					</div>
					<Link to='/about' className={styles['nav-link']}>
						About
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
