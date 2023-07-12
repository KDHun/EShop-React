import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddItem.module.css";
import Button from "../UI/Button";
import axios from "axios";
import Input from "../UI/Input";
import { useSelector } from "react-redux";

const AddItem = () => {
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [isShow,setIsShow] = useState(false);
  const nameHandler = (event) => {
    setNameValue(() => event.target.value);
  };
  const priceHandler = (event) => {
    setPriceValue(() => event.target.value);
  };
  const discountHandler = (event) => {
    setDiscountValue(() => event.target.value);
  };
  const quantityHandler = (event) => {
    setQuantityValue(() => event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescriptionValue(() => event.target.value);
  };
  const auth = useSelector((state) => state.auth)|localStorage.getItem("Login");
  const submitHandler = (event) => {

    event.preventDefault();
    axios
      .post("http://localhost:3001/Item",{
        Name: nameValue,
        Price: priceValue,
        Discount: discountValue,
        Quanity: quantityValue,
        Description: descriptionValue,
      },
      {
        headers: {
          authorization: `Barear ${auth?auth.Token:localStorage.getItem("Token")}`
        }
      })
      .then((response) => {
        console.log(response);
        setIsShow(true);
        setNameValue("");
        setPriceValue("");
        setQuantityValue("");
        setDiscountValue("");
        setDescriptionValue("");
        setTimeout(()=>{
          setIsShow(false);
        },5000);
      })
      .catch((error) => {
        console.log(error);
      });
      
  
  };
  return (
    <Card className={classes.FormCard}>
      {isShow&&<div className={classes.successMSG}>Item successfully Added✅</div>}
      <form onSubmit={submitHandler}>
        <Input
          label="Name"
          input={{
            type: "text",
            id: "name",
            value: nameValue,
            onChange: nameHandler,
          }}
        />
        <br />
        <Input
          label="Price"
          input={{
            type: "text",
            id: "price",
            step: "0.01",
            value: priceValue,
            onChange: priceHandler,
          }}
        />
        <br />
        <Input
          label="Discount"
          input={{
            type: "number",
            id: "discount",
            step: "0.01",
            value: discountValue,
            onChange: discountHandler,
          }}
        />
        <br />
        <Input
          label="Quantity"
          input={{
            type: "number",
            id: "quantity",
            value: quantityValue,
            onChange: quantityHandler,
          }}
        />
        <br />
        <Input
          label="Description"
          input={{
            type: "text",
            id: "description",
            value: descriptionValue,
            onChange: descriptionHandler,
          }}
        />
        <br />
        <Button type="submit">Add Item</Button>
      </form>

    </Card>
  );
};

export default AddItem;
