import axios from "axios";

// подставляет везде в апишки урл по умолчанию
const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

// пихает во все запросы токен, если есть. 
// если есть, значит мы атворизованы. Это для проверки авторизации надо
// саму проверку, авторизован или нет, мы сделаем внутри app.js
instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance