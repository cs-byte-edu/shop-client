export const getStorageValue = (key, defaultValue = []) => {
  try {
    const storageItem = localStorage.getItem(key);
    return JSON.parse(storageItem) ?? defaultValue;
  } catch {
    console.log(`Failed to get from localStorage ${key}`);
    return defaultValue;
  }
};

export const setStorageValue = (key, value) => {
  try {
    const storageItem = JSON.stringify(value);
    localStorage.setItem(key, storageItem);
  } catch (error) {
    console.log(`Failed to save to localStorage ${key}: ${error}`);
  }
};

export const removeStorageValue = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(`Failed to remove from localStorage ${key}: ${error}`);
  }
};
