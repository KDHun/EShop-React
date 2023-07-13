import React, { useState } from "react";
import Product from "../Item/Product";
import axios from "axios";
import Card from "../UI/Card";
import classes from "./ItemList.module.css";
import { useSelector } from "react-redux";

const ItemList = () => {
  const [Items, setData] = useState();
  const auth = useSelector((state) => state.auth);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/Item`,{headers:{authorization: `Barear ${auth.Token?auth.Token:localStorage.getItem("Token")}`}}).then((response) => {
      setData(response.data);
    }).catch((err)=>{
      console.log(err);
    });
  }, [auth]);
  if (!Items) {
    return <div>Loading...</div>;
  }

  return (
    <Card className={classes.itemCard}>
      {Items.map(
        (element) =>
          element.Quanity > 0 && (
            <Product
              key={element._id}
              element={element}
              ItemPhoto="https://picsum.photos/4000/4000"
            />
          )
      )}
    </Card>
  );
};

export default ItemList;
