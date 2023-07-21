import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  let saved = localStorage.getItem(key);
  if (key !== "theword")
  {
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  }
  return saved || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};