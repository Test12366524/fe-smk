export const toKebabCase = (str) => {
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
  return kebabString
    .split('-') // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words with a space
};
