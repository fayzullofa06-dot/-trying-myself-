import axios from "axios"
let BaserUrl='https://dummyjson.com/'

const api =axios.create({
   baseURL:BaserUrl,
   timeout:5000,
   headers:{
    'Content-Type':"application/json",
   }
})
console.log(api)
export default api;
