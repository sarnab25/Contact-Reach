import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:7080/' });

API.interceptors.request.use(req => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;
});

export const getallContacts=()=>API.get("/contacts/get")
export const getallMessages=()=>API.get("/messages/get")
export const deleteContact =(id)=>API.delete(`/contacts/delete/${id}`)