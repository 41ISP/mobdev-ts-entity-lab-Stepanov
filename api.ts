import axios from "axios"
import { Root } from "react-dom/client"


export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstance = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
})

const getGames = async ():Promise<Root[]> => {

    const res = await apiInstance.get<Root[]>('/games',{
        params:{
            populate: "cover",
        }
    })
    return res.data

}
export const api = {getGames}