import  Axios  from "axios";
const axios=Axios.create({
    baseURL:'http://localhost:3075/api'
})
export default axios