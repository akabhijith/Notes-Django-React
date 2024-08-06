import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api=axios.create({                //An Axios instance named api is created with a base URL.
    baseURL:import.meta.env.VITE_API_URL //import.meta.env.VITE_API_URL is likely an environment variable set in a Vite project to specify the base URL for the API.
});

api.interceptors.request.use( //interceptor runs before each request made
    (config)=>{
        const token=localStorage.getItem(ACCESS_TOKEN);//attempt to retrieve the ACCESS_TOKEN from local storage
        if (token){
            config.headers.Authorization=`Bearer ${token}`;//if found, it adds an Authorization header to the request
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error); //if error the promise is rejected

    }
)

export default api;