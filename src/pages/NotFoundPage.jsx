// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
	return (
		<div className={styles['not-found-container']}>
			<h1 className={styles['not-found-title']}>404</h1>
			<p className={styles['not-found-message']}>
				Oops! The page you're looking for doesn't exist.
			</p>
			<p className={styles['not-found-subtext']}>
				It might have been moved or deleted.
			</p>
			<Link to='/' className={styles['go-home-button']}>
				Go to Homepage
			</Link>
		</div>
	);
};

export default NotFoundPage;
