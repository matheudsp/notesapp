import axios from 'axios';

const api = axios.create({
  // ipconfig ipv4
    // baseURL: 'http://localhost:3333'
  baseURL: 'http://192.168.1.16:3333'
  // baseURL: 'http://10.9.143.177:3333'
})

export {api};