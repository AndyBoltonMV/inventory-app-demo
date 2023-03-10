import React from "react";
import apiURL from "../api";
import { EditItem } from "./EditItem";

export const Item = (props) => {
  async function clickHandler() {
    try {
      const response = await fetch(`${apiURL}/items/${props.item.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        props.setItem();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {!props.isUpdate ? (
        <div
          onClick={
            props.fetchItem ? () => props.fetchItem(props.item.id) : null
          }
        >
          <h3>{props.item.title}</h3>
          <img src={props.item.image} alt={props.item.title} />
          {!props.fetchItem && (
            <>
              <h4>Description</h4>
              <p>{props.item.description}</p>
              <p>Category: {props.item.category}</p>
              <p>Price: £{props.item.price}</p>
              <button onClick={() => props.setItem()}>Go Back</button>
              <button onClick={() => props.setIsUpdate(true)}>Update?</button>
              <button onClick={clickHandler}>Delete</button>
            </>
          )}
        </div>
      ) : (
        <EditItem
          item={props.item}
          setIsUpdate={props.setIsUpdate}
          setItem={props.setItem}
        />
      )}
    </>
  );
};
