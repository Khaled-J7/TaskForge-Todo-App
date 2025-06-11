// src/utils/utils.js
import { parseISO, format as formatFns } from 'date-fns';

export const getTodayDate = () => {
	return new Date().toISOString();
};

export const formatDisplayDate = (dateString) => {
	if (!dateString) return 'No due date';

	// Ensure dateString is always a string before parsing
	const dateToParse =
		typeof dateString === 'string' ? dateString : String(dateString);

	const date = parseISO(dateToParse); // Use parseISO for robust parsing

	// Check if the parsed date is valid before formatting
	if (isNaN(date.getTime())) {
		console.warn(
			'Invalid date string provided to formatDisplayDate:',
			dateString
		);
		return 'Invalid Date';
	}

	// Format using toLocaleDateString for localized, human-readable format
	return date.toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
};
