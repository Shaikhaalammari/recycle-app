import axios from "axios";

const instance = axios.create({
  baseURL: "https://cookie-shop-test.herokuapp.com",
});

export default instance;
