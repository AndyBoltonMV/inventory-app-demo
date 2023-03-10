import React, { useState } from "react";
import apiURL from "../api";

export const AddItem = (props) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          price,
          description,
          category,
          image,
        }),
      });
      if (response.ok) {
        props.setIsAdd(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <input
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input onChange={(e) => setImage(e.target.value)} placeholder="Image" />
      <button type="submit">Submit</button>
    </form>
  );
};
