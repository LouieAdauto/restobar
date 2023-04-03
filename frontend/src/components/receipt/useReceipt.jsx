import React from "react";
import Receipt from "./createReceipt";
import { useSelector } from "react-redux";
// import {render} from 'react-thermal-printer'
//const data = await render(receipt);

export default function () {
  const { orderDetails } = useSelector((state) => state);
  console.log(orderDetails);
  return <Receipt order={orderDetails} />;
}
