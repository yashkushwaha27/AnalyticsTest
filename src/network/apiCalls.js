import axios from "axios";

export const getData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const getDataByID = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
