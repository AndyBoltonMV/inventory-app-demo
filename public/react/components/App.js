import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList"; // Imported to mirror the sauces section

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Item } from "./Item";
import { AddItem } from "./AddItem";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]); // Added a state to store my items
  const [item, setItem] = useState();
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();

      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  // Created an async function for fetching items, again mirroring the sauces code
  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchItem(id) {
    try {
      const response = await fetch(`${apiURL}/items/${id}`);
      const itemData = await response.json();

      setItem(itemData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchSauces();
    fetchItems(); // Added fetchItems() to the useEffect
  }, [item, isAdd]);

  return (
    <main>
      <h1>Sauce Store</h1>
      <h2>All things 🔥</h2>
      <button onClick={() => setIsAdd(true)}>Add Item?</button>
      {/* added ItemsList component above sauces so I can debug easier */}
      {!isAdd ? (
        <>
          {item ? (
            <Item
              item={item}
              setItem={setItem}
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
            />
          ) : (
            <>
              <ItemsList
                items={items}
                fetchItem={fetchItem}
                setItem={setItem}
              />
              <SaucesList sauces={sauces} />
            </>
          )}
        </>
      ) : (
        <AddItem setIsAdd={setIsAdd} />
      )}
    </main>
  );
};
