import axios from "axios";

const api = axios.create({
  baseURL: "https://YOUR-MOCKAPI-URL.mockapi.io"
})

export default api