import api from "../api/api";
const GetInfo= async()=>{
    const re= await api.get('/products')

return re?.data.products
}
export const postData= async()=>{
const res =await api.post('/orders')
console.log(res)
}
export default  GetInfo