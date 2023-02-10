import React, { useState } from "react";
import { baseUrl } from "..";
import axios from "axios";
const Track = () => {
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [data,setData]=useState("");
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const data=await axios.get(`${baseUrl}/order/${id}`) 
    setData(data.data)
    console.log(data.data)
  }
  return (<>
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">Enter order Id</label>
      <input
        type="text"
        name="orderid"
        id="id"
        required
        onInput={(e) => {
          let current_id = e.target.value;
          console.log(current_id.substring(0, 2));
          if (/OD\d\d\d\d/.test(current_id)) {
            setError(false);
            setId(e.target.value);
          } else {
            setError(true);
          }
          setData("")
        }}
      />
      <button disabled={error}>Search</button>
      {error && (
        <>
          <span style={{ color: "red" }}>Enter valid orderId</span>
        </>
      )}
    </form>
    {(data) && <div>
      <h1>Order details</h1>
      <table>
        <tbody>
          <tr>
          <th>Order Id:</th>
          <th>{data._id}</th>
          </tr>
          <tr>
            <td>Order Date:</td>
            <td>{new Date(parseInt(data.date)).toDateString().replaceAll(" ","-")}</td>
          </tr>
          <tr>
            <td>Delivery Date:</td>
            <td>{new Date(parseInt(data.date)+(5*24*60*60*1000)).toDateString().replaceAll(" ","-")}</td>
          </tr>
          <tr>
            <td>Amount Paid:</td>
            <td>Rs. {data.price*data.quantity}</td>
          </tr>
        </tbody>
      </table>
      
      </div>}
    </>
  );
};

export default Track;
