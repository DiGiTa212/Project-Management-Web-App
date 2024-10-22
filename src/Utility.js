export function removeWhiteSpaces(str) {
  // Ensure input is a string before attempting to replace whitespaces
  if (typeof str === 'string') {
    return str.replace(/\s+/g, '');
  }
  return ''; // Return an empty string for invalid input
}

export function capitalizeFirstLetter(str) {
  if (typeof str === 'string' && str.length > 0) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return ''; // Return an empty string for invalid input
}

export function getFirstWord(str) {
  if (typeof str === 'string') {
    return str.split(' ')[0] || ''; // Return the first word or an empty string if not found
  }
  return ''; // Return an empty string for invalid input
}

export function formatDate(date) {
  if (date instanceof Date && !isNaN(date)) {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
  return ''; // Return an empty string for invalid date input
}

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const INIT_PROJECT = [
  {
    id: '00a',
    title: 'Learning React',
    dueDate: '2024-12-30',
    description: `Learn React from the ground up.\n\nStart with the basics, finish with advanced knowledge.`,
  },
];

export const INITIAL_PROJECT_TASKS = [
  {id: '00a', task: 'Learn advanced concepts'},
  {id: '01a', task: 'Learn the basics. '},
  {id: '02a', task:'Learn whatever the frick.'}
];

  // ID generator function
export const generateID = (count, setCount) => {
    if (count >= 5200) {
      alert('All IDs have been generated!');
      return null; // Return null if all IDs are used
    }

    const numberPart = String(count % 100).padStart(2, '0');
    const letterIndex = Math.floor(count / 100);
    const letterPart = letterIndex < 26
      ? String.fromCharCode(97 + letterIndex) // 'a' to 'z'
      : String.fromCharCode(65 + (letterIndex - 26)); // 'A' to 'Z'

      setCount(prevCount => ++prevCount); // Increment count for next ID
    return `${numberPart}${letterPart}`; // Return generated ID
  };
