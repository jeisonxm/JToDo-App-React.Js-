import React from "react";

function useLocalStorage(itemName, initialValue) {
  //? Metele mente
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  // Aqui marcamos el estado del item, por ejemplo como parseditem va ser el valor del item tanto si existe o no, sera el estado que se marcara
  const [Item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // aui optenemos el item que deseemos, es decir lo que queramos usar
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        // Si el item no existe lo creamos, y si existe lo usamos
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch {
        setError(true);
      }
    }, 1000);
  });
  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { Item, saveItem, loading, error };
}
export { useLocalStorage };
