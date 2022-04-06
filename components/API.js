import axios from "axios";
const API_PATH = "https://web.cosmoage.kr/api";
export default async function get(path){
    const res = await fetch(`${API_PATH}${path}`);
    return await res.json();
}
export async function post(path, data){
    return await axios.post(`${API_PATH}${path}`, data);
}