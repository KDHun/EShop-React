import React, { useState } from "react";
import classes from "./Bill.module.css";
import Card from "../UI/Card";
import ItemList from "../ItemList/ItemList";
import BillView from "./BillView";
import Button from "../UI/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { billItemActions } from "../../store/billItemsSlice";
import AddCustomerBill from "./AddCustomerBill";

const Bill = () => {
  const billItems = useSelector((state) => state.billItems);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({});
  const [itemList, setItemList] = useState([]);
  const customerHandler = (customer1) => {
    setCustomer(customer1);
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/Item", {
        headers: {
          authorization: `Barear ${
            auth.Token ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((response) => {
        setItemList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [auth]);

  const billGenerateHandler = () => {
    if (billItems.length === 0 ||customer === {}) return;
    let updatedItems = billItems.map((ele) => {return {_id:ele._id,data:{Quanity: ele.Quanity,},}})
    updatedItems.forEach((element) => {element.data.Quanity=+element.data.Quanity*-1 + +itemList.find((ele) => ele._id === element._id).Quanity});

    axios
      .patch("http://localhost:3001/Items", updatedItems, {
        headers: {
          authorization: `Barear ${
            auth.Token ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post(
        "http://localhost:3001/Bill",
        {
          CustomerId: customer._id,
          CustomerName:
            customer.FirstName +
            " " +
            customer.MiddleName +
            " " +
            customer.LastName,
          TotalAmount: billItems
            ? billItems.reduce(
                (sum, ele) =>
                  sum + ele.Quanity * ele.Price * (1 - ele.Discount / 100),
                0
              )
            : 0,
          TotalItem: billItems.length,
          Items: billItems,
        },
        {
          headers: {
            authorization: `Barear ${
              auth.Token ? auth.Token : localStorage.getItem("Token")
            }`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch(billItemActions.reset());
  };

  return (
    <>
      <div className={classes.outerCard}>
        <Card className={classes.innerCard}>
          <AddCustomerBill onCustomerHandler={customerHandler} />
        </Card>
        <Card className={classes.innerCard}>
          <ItemList></ItemList>
        </Card>
        <Card className={classes.innerCard}>
          <BillView
            Name={
              customer !== {}
                ? customer.FirstName +
                  " " +
                  customer.MiddleName +
                  " " +
                  customer.LastName
                : ""
            }
          ></BillView>
        </Card>
        <br />
      </div>
      <Button onClick={billGenerateHandler}>Bill Generate</Button>
    </>
  );
};

export default Bill;
