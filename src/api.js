import axios from "axios"

const api = axios.create({
    baseURL:"https://6a4b6667f5eab0bb6b62b2ec.mockapi.io/products"
})

export default api