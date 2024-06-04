import axios from "axios";

const INSTANCE_AXIOS = axios.create({
  baseURL: "https://fakestoreapi.com",
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default INSTANCE_AXIOS;
