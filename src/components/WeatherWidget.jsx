// src/components/WeatherWidget.jsx
import React, { useState, useEffect } from 'react';
import { getDailyForecast } from '../services/weatherService'; // Import our weather service
import { format } from 'date-fns'; // For date formatting and manipulation
import styles from './WeatherWidget.module.css';

const WeatherWidget = () => {
	const [forecastData, setForecastData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const data = await getDailyForecast();

				if (
					data &&
					data.daily &&
					data.daily.time &&
					data.daily.time.length > 0
				) {
					const dailyForecasts = data.daily.time.map((dateStr, index) => {
						const weatherCode = data.daily.weathercode[index];

						// Helper to get icon based on weather code (WMO codes to OpenWeatherMap-like icons)
						const getWeatherIcon = (code) => {
							if (code === 0) return '01d'; // Clear sky (day)
							if (code === 1) return '02d'; // Few clouds (day)
							if (code === 2) return '03d'; // Scattered clouds
							if (code === 3) return '04d'; // Broken clouds
							if (code >= 45 && code <= 48) return '50d'; // Fog
							if (code >= 51 && code <= 55) return '09d'; // Drizzle
							if (code >= 56 && code <= 57) return '09d'; // Freezing Drizzle
							if (code >= 61 && code <= 65) return '10d'; // Rain
							if (code >= 66 && code <= 67) return '10d'; // Freezing Rain
							if (code >= 71 && code <= 75) return '13d'; // Snow fall
							if (code === 77) return '13d'; // Snow grains
							if (code >= 80 && code <= 82) return '09d'; // Rain showers
							if (code >= 85 && code <= 86) return '13d'; // Snow showers
							if (code === 95 || (code >= 96 && code <= 99)) return '11d'; // Thunderstorm
							return '01d'; // Default clear sky
						};

						return {
							date: new Date(dateStr),
							dayName: format(new Date(dateStr), 'EEE'),
							minTemp: Math.round(data.daily.temperature_2m_min[index]),
							maxTemp: Math.round(data.daily.temperature_2m_max[index]),
							icon: getWeatherIcon(weatherCode), // Use mapped icon
							description: 'Weather condition', // Placeholder
						};
					});
					setForecastData(dailyForecasts.slice(0, 7)); // Get up to 7 days
				} else {
					setForecastData([]);
				}
			} catch (err) {
				setError(
					'Failed to load weather data. Please check your internet connection. Error: ' +
						err.message
				);
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchWeatherData();
	}, []); // Empty dependency array: runs only once after initial render

	if (loading) {
		return <div className={styles.loading}>Loading weather...</div>;
	}

	if (error) {
		return <div className={styles.error}>{error}</div>;
	}

	if (!forecastData || forecastData.length === 0) {
		return <div className={styles['no-data']}>No weather data available.</div>;
	}

	// Duplicate forecastData for infinite scroll
	const duplicatedForecastData = [...forecastData, ...forecastData];
	// Adjust scroll speed dynamically based on number of items
	const scrollSpeed = forecastData.length * 5; // e.g., 5 seconds per item, so 35s for 7 items

	return (
		<div className={styles['weather-widget-container']}>
			<div
				className={`${styles['forecast-list']} ${styles.animate}`}
				style={{ '--scroll-speed': `${scrollSpeed}s` }} // Apply dynamic scroll speed
			>
				{duplicatedForecastData.map(
					(
						day,
						index // Map duplicated data
					) => (
						<div key={index} className={styles['forecast-item']}>
							<span className={styles['day-name']}>{day.dayName}</span>
							<img
								src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
								alt={day.description}
								className={styles['weather-icon']}
							/>
							<div className={styles['temps']}>
								<span className={styles['max-temp']}>{day.maxTemp}°C</span> /
								<span className={styles['min-temp']}>{day.minTemp}°C</span>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default WeatherWidget;
