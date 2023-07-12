import React, { useEffect, useState } from "react";
import classes from "./ItemList.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  const [items, setItems] = useState([]);
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  useEffect(() => {
    axios
      .get("http://localhost:3001/Item", {
        headers: {
          authorization: `Barear ${
            auth.Token ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [auth]);
  console.log(items);
  const deleteItemHandler = (ItemId) => {
    axios
      .delete(`http://localhost:3001/Item/${ItemId}`, {
        headers: {
          authorization: `Barear ${
            auth.Token ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((res) => {
        console.log(res);
        setItems(items.filter((Item) => Item._id !== ItemId));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.ItemList}>
      <table className={classes.ItemListTable}>
        <tr className={classes.ItemListTableHeader}>
          <th>No.</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quanity</th>
          <th>Discount</th>
          <th>Actions</th>
        </tr>
        {items.map((item, index) => (
          <Item
            key={item._id}
            index={index}
            {...item}
            onDelete={deleteItemHandler}
          />
        ))}
      </table>
      <div className={classes.AddItemDiv}>
        <Link to="/feature/additem" className={classes.AddItem}>
          Add Item
        </Link>
      </div>
    </div>
  );
};

export default ItemList;
