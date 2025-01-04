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
