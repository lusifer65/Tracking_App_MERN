import React, { useState } from "react";
import { baseUrl } from "..";
import axios from "axios";
const Track = () => {
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.get(`${baseUrl}/order/${id}`);
    setData(data.data);
  };
  const getStatus = () => {
    const Order_date = new Date(Date.now() - 5 * 24 * 3600 * 1000);
    console.log(
      new Date(parseInt(data.date)),
      new Date(parseInt(data.date)).valueOf()
    );
    console.log(Order_date.valueOf(), Order_date);
    if (new Date(parseInt(data.date)).valueOf() - Order_date.valueOf() > 0) {
      return "Your Order is Shipped";
    }
    return "your order was Delivered";
  };
  return (
    <div className="track">
      {data == null && <span>No Order found !! </span>}
      <form id="trackForm" onSubmit={handleSubmit}>
        <label htmlFor="id">Enter Order Id</label>
        <input
          type="text"
          name="orderid"
          id="id"
          placeholder="Order Id..."
          required
          onInput={(e) => {
            let current_id = e.target.value;

            if (/OD\d\d\d\d/.test(current_id)) {
              setError(false);
              setId(e.target.value);
            } else {
              setError(true);
            }
            setData("");
          }}
        />
        <button disabled={error}>Search</button>
        {error && (
          <>
            <span style={{ color: "red" }}>Enter valid Order Id !!</span>
          </>
        )}
      </form>
      {data && (
        <div className="summery">
          <h1>Order details</h1>
          <table cellPadding={10} border={"2px solid black"}>
            <tbody>
              <tr>
                <th>Order Id:</th>
                <th>{data._id}</th>
              </tr>
              <tr>
                <td>Order Date:</td>
                <td>
                  {new Date(parseInt(data.date))
                    .toDateString()
                    .replaceAll(" ", "-")}
                </td>
              </tr>
              <tr>
                <td>Delivery Date:</td>
                <td>
                  {new Date(parseInt(data.date) + 5 * 24 * 60 * 60 * 1000)
                    .toDateString()
                    .replaceAll(" ", "-")}
                </td>
              </tr>
              <tr>
                <td>Amount Paid:</td>
                <td>Rs. {data.price * data.quantity}</td>
              </tr>
              <tr>
                <td>Order Status:</td>
                <td>{getStatus()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Track;
