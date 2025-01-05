export const toKebabCase = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]+/g, '');
};

export const fromKebabCaseToCamelCase = (str) => {
  return str
    .split('-') // Split the string by hyphens
    .map((word, index) => {
      // Capitalize the first letter of each word except the first one
      if (index === 0) {
        return word; // Keep the first word in lowercase
      }
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter
    })
    .join(''); // Join the words back together
};

export const objectToParams = (obj) => {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
};

export const kebabToNormalText = (kebabString) => {
  if (!kebabString) return null;
  return kebabString
    .split('-') // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words with a space
};

export const getFileUrl = (fileName) => {
  const config = useRuntimeConfig();

  return `${config.public.apiBaseURL}/assets/public/${fileName}`;
};

export const formatFullDate = (date) => {
  if (!date) return null;

  const dateObj = new Date(date);

  // Basic date formatting
  const dateOnly = dateObj.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }); // Example: "15 November 2024"

  const dateWithDay = dateObj.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }); // Example: "Jumat, 15 November 2024"

  const dateShort = dateObj.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }); // Example: "15 Nov 2024"

  // Time formatting
  const timeOnly = dateObj.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  }); // Example: "14:30"

  const timeWithSeconds = dateObj.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }); // Example: "14:30:45"

  // Combined date and time
  const dateTime = dateObj.toLocaleString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }); // Example: "15 November 2024 14:30"

  const dateTimeShort = dateObj.toLocaleString('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }); // Example: "15 Nov 2024 14:30"

  const dateTimeWithSeconds = dateObj.toLocaleString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }); // Example: "15 November 2024 14:30:45"

  // Custom numeric format
  const numeric = `${dateObj.getDate().toString().padStart(2, '0')}-${(
    dateObj.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${dateObj.getFullYear()}`;

  // Example: "15-11-2024"

  const simpleDate = dateObj.toISOString().substring(0, 10);

  return {
    simpleDate,
    dateOnly,
    dateWithDay,
    dateShort,
    timeOnly,
    timeWithSeconds,
    dateTime,
    dateTimeShort,
    dateTimeWithSeconds,
    numeric,
  };
};
