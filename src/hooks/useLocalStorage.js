export default function useLocalStorage() {
  const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

  const setLocalStorage = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

  const removeLocalStorage = (key) => localStorage.removeItem(key);

  const clearLocalStorage = () => localStorage.clear();

  return {
    getLocalStorage,
    setLocalStorage,
    removeLocalStorage,
    clearLocalStorage,
  };
}
