import React, { useState } from "react";
import apiURL from "../api";

export const EditItem = (props) => {
  const [title, setTitle] = useState(props.item.title);
  const [price, setPrice] = useState(props.item.price);
  const [description, setDescription] = useState(props.item.description);
  const [category, setCategory] = useState(props.item.category);
  const [image, setImage] = useState(props.item.image);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/items/${props.item.id}`, {
        method: "PUT",
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
        props.setIsUpdate(false);
        props.setItem();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <input onChange={(e) => setTitle(e.target.value)} value={title} />
      <input onChange={(e) => setPrice(e.target.value)} value={price} />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input onChange={(e) => setCategory(e.target.value)} value={category} />
      <input onChange={(e) => setImage(e.target.value)} value={image} />
      <button type="submit">Submit</button>
    </form>
  );
};
