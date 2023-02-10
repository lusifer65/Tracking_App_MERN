import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "..";

const PlaceOrder = () => {
  const [product, setProduct] = useState([]);
  const [model, setModel] = useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      await axios
        .get(`${baseUrl}/products`)
        .then((res) => {
          setProduct(res?.data);
        })
        .catch((err) => console.error(err));
    };
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productHandler = (e) => {
    let getmodel = [];
    getmodel = product.filter((item) => {
      if (item.type === e.target.value) {
        return true;
      }
      return false;
    });
    setData({ ...data, product: e.target.value });
    setModel(getmodel[0]?.models);
  };

  const inputHandler = (e) => {
    if (e.target.name === "model") {
      let temp = { ...data };
      temp[e.target.name] =
        e.target.options[e.target.options.selectedIndex].innerText;
      temp["price"] = parseInt(e.target.value);
      setData(temp);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    await axios.post(`${baseUrl}/addorder`, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="place">
      <form onSubmit={formHandler}>
        <h3>Place order</h3>
        <div>
          <label htmlFor="product">Select Product :</label>
          <select
            name="product"
            id="product"
            onChange={productHandler}
            required
          >
            <option value="">--select Product--</option>
            {product.map((item, index) => {
              return (
                <option value={item.type} key={index}>
                  {item.type}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="model">Select Model :</label>
          <select name="model" id="model" required onInput={inputHandler}>
            <option value="">--select Model--</option>
            {model.map((item, index) => {
              return (
                <option key={index} value={item.price}>
                  {item.model}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Select Quantity :</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            onInput={inputHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Shiping Address :</label>
          <br />
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="10"
            onInput={inputHandler}
            required
          />
        </div>
        <button type="submit" >Confirm</button>
        <button
          type="reset"
          onClick={() => {
            setData({});
          }}
        >
          cancel
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
