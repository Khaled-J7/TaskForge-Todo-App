// src/components/CurrentWeatherDisplay.jsx
import React, { useState, useEffect } from 'react';
import { getCurrentWeather } from '../services/weatherService';
import styles from './CurrentWeatherDisplay.module.css';

const CurrentWeatherDisplay = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCurrentWeatherData = async () => {
			try {
				const data = await getCurrentWeather();
				setCurrentWeather(data);
			} catch (err) {
				setError('Failed to load current weather.');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchCurrentWeatherData();
	}, []); // Empty dependency array: runs only once after initial render

	if (loading) {
		return <div className={styles.loading}>Loading...</div>;
	}

	if (error) {
		return <div className={styles.error}>Error</div>;
	}

	// Ensure weather data and icon are available before rendering
	if (
		!currentWeather ||
		!currentWeather.main ||
		!currentWeather.weather ||
		currentWeather.weather.length === 0
	) {
		return <div className={styles['no-data']}>N/A</div>;
	}

	return (
		<div className={styles['current-weather-container']}>
			<img
				src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
				alt={currentWeather.weather[0].description}
				className={styles['weather-icon']}
			/>
			<span className={styles['temp']}>
				{Math.round(currentWeather.main.temp)}°C
			</span>
		</div>
	);
};

export default CurrentWeatherDisplay;
