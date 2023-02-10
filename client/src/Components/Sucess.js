import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "..";

const Sucess = (name) => {
  const [data, setData] = useState({});
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${baseUrl}/order/${location.state.id}`).then((res) => {
        setData(res.data);
      });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getStatus = () => {
    const Order_date = new Date(Date.now() - 5 * 24 * 3600 * 1000);
    console.log(new Date(parseInt(data.date)),new Date(parseInt(data.date)).valueOf());
    console.log(Order_date.valueOf(), Order_date);
    if ((new Date(parseInt(data.date)).valueOf() - Order_date.valueOf()>0)) {
      return "Your Order is Shipped";
    }
    return "your order was Delivered";
  };
  return (
    <div className="sucess">
      <h1>Order Status</h1>
      <table cellPadding={20} border="2px solid black">
        <thead>
          <tr>
            <th>Product Details</th>
            <th>Status</th>
            <th>Delivery</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>{data.model}</p>
            </td>
            <td>
              <p>{getStatus()}</p>
            </td>
            <td>
              {new Date(parseInt(data.date) + 5 * 24 * 3600 * 1000)
                .toDateString()
                .replaceAll(" ", "-")}
            </td>
            <td>Rs. {data.price * data.quantity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sucess;
