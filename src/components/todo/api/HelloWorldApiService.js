import axios from 'axios'
import { apiClient } from './ApiClient'

export function retrieveHelloWorldBean(){

    return apiClient.get('hello-world')    //a rest api call

}

export const retrieveHelloWorldPathParameter //arrow function. equivalent to a regular function with a return statement
= (username,token) => apiClient.get(`/hello-world/path-variable/${username}`,
// {
//     headers:{Authorization: token}  //we dont need it any more, cause we added an interceptor.  The authorization token is added to all rest api calls
// }
)


