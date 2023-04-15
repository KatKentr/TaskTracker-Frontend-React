import axios from 'axios'


const apiClient = axios.create(

                       
        {
            
            baseURL: 'http://localhost:8080'   //define the base url

        }
);


export function retrieveHelloWorldBean(){

    return apiClient.get('hello-world')    //a rest api call

}

export const retrieveHelloWorldPathParameter //arrow function. equivalent to a regular function with a return statement
= (username) => apiClient.get(`/hello-world/path-variable/${username}`)

