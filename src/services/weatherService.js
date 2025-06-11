// src/services/weatherService.js
import axios from 'axios';

// Base URL for Open-Meteo API
const BASE_URL = 'https://api.open-meteo.com/v1';

// Coordinates for Tunis (Tunisia)
const LATITUDE = 36.8065;
const LONGITUDE = 10.1815;

/**
 * Fetches 7-day daily forecast data from Open-Meteo.
 * Open-Meteo directly provides daily aggregated data (max/min temp, weather code).
 * @returns {Promise<Object>} The raw daily forecast data.
 */
export const getDailyForecast = async () => {
	try {
		// --- CORRECTED AND CLEAN URL LINE ---
		// Ensure no accidental formatting is copied here.
		// This is a standard JavaScript template literal string.
		const url = `${BASE_URL}/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=7`;

		const response = await axios.get(url);
		return response.data; // axios puts response body in .data
	} catch (error) {
		console.error(
			'Error fetching daily forecast from Open-Meteo:',
			error.message
		);
		// axios errors might have a .response property with more details
		if (error.response) {
			console.error('API response error data:', error.response.data);
		}
		throw error;
	}
};

/**
 * Helper to convert Open-Meteo weather codes to a simple description and OpenWeatherMap-like icon name.
 * @param {number} weatherCode - The WMO Weather interpretation code from Open-Meteo.
 * @returns {{description: string, icon: string}} An object with a description and icon name.
 */
const getWeatherDescriptionAndIcon = (weatherCode) => {
	// A simplified mapping for common codes (you can expand this as needed)
	if (weatherCode === 0) return { description: 'Clear sky', icon: '01d' }; // Clear sky
	if (weatherCode >= 1 && weatherCode <= 3)
		return { description: 'Mainly clear to overcast', icon: '02d' }; // Cloudy
	if (weatherCode === 45 || weatherCode === 48)
		return { description: 'Fog', icon: '50d' }; // Fog
	if (weatherCode >= 51 && weatherCode <= 55)
		return { description: 'Drizzle', icon: '09d' }; // Drizzle
	if (weatherCode >= 56 && weatherCode <= 57)
		return { description: 'Freezing Drizzle', icon: '09d' }; // Freezing Drizzle
	if (weatherCode >= 61 && weatherCode <= 65)
		return { description: 'Rain', icon: '10d' }; // Rain
	if (weatherCode >= 66 && weatherCode <= 67)
		return { description: 'Freezing Rain', icon: '10d' }; // Freezing Rain
	if (weatherCode >= 71 && weatherCode <= 75)
		return { description: 'Snow fall', icon: '13d' }; // Snow fall
	if (weatherCode === 77) return { description: 'Snow grains', icon: '13d' }; // Snow grains
	if (weatherCode >= 80 && weatherCode <= 82)
		return { description: 'Rain showers', icon: '09d' }; // Rain showers
	if (weatherCode >= 85 && weatherCode <= 86)
		return { description: 'Snow showers', icon: '13d' }; // Snow showers
	if (weatherCode === 95) return { description: 'Thunderstorm', icon: '11d' }; // Thunderstorm
	if (weatherCode >= 96 && weatherCode <= 99)
		return { description: 'Thunderstorm with hail', icon: '11d' }; // Thunderstorm with hail
	return { description: 'Unknown', icon: '01d' }; // Default fallback
};

/**
 * Fetches current weather data (simulated from daily forecast for simplicity).
 * @param {string} city - The city name (used for conceptual consistency).
 * @returns {Promise<Object>} An object simulating current weather details.
 */
export const getCurrentWeather = async (city = 'Tunis') => {
	try {
		const forecastData = await getDailyForecast(); // Reusing daily forecast for simplicity
		if (
			forecastData &&
			forecastData.daily &&
			forecastData.daily.time &&
			forecastData.daily.time.length > 0
		) {
			const today = new Date();
			// Find today's data in the forecast
			const todayIndex = forecastData.daily.time.findIndex((dateStr) => {
				const forecastDate = new Date(dateStr);
				return (
					today.getDate() === forecastDate.getDate() &&
					today.getMonth() === forecastDate.getMonth() &&
					today.getFullYear() === forecastDate.getFullYear()
				);
			});

			if (todayIndex !== -1) {
				const weatherCode = forecastData.daily.weathercode[todayIndex];
				const tempMax = forecastData.daily.temperature_2m_max[todayIndex];
				const tempMin = forecastData.daily.temperature_2m_min[todayIndex];
				const { description, icon } = getWeatherDescriptionAndIcon(weatherCode);

				// Simulate an OpenWeatherMap-like current weather object for compatibility with WeatherWidget
				return {
					main: { temp: (tempMax + tempMin) / 2 }, // Simple average for "current" temp
					weather: [{ description: description, icon: icon }],
					name: city, // Use the passed city name
					tempMax: tempMax,
					tempMin: tempMin,
				};
			}
		}
		throw new Error(
			'Could not retrieve current weather for today from forecast.'
		);
	} catch (error) {
		console.error(
			'Error fetching current weather with Open-Meteo:',
			error.message
		);
		if (error.response) {
			console.error('API response error data:', error.response.data);
		}
		throw error;
	}
};
