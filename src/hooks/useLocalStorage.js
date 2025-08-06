import React from "react";
import { useEffect, useState } from "react";

/**
 *
 * @param {string} key
 * @param {any|() => any} initialValue
 * @returns {[value, setValue]}
 */
export const useLocalStorage = (key, initialValue = "") => {
  // Create a state but initialize it depending on the value of localStorage
  const [value, setValue] = useState(() => {
    const valueFromLocalStorage = localStorage.getItem(key);

    // If the value is not a null, parse it to json
    if (valueFromLocalStorage !== null) {
      return JSON.parse(valueFromLocalStorage);
    }

    // If the value is a function, return it
    if (typeof initialValue === "function") {
      return initialValue();
    }
    return initialValue;
  });

  // If value changed, run the useEffect
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
