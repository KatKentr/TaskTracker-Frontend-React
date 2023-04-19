import axios from 'axios'


const apiClient = axios.create(

                       
        {
            
            baseURL: 'http://localhost:8080'   //define the base url

        }
);


export function retrieveAllToDosForUsernameApi(username){

    return apiClient.get(`/users/${username}/todos`)    //a rest api call

}

export const deleteToDoApi                                //arrow function. equivalent to a regular function with a return statement
=(username,id) => apiClient.delete(`/users/${username}/todos/${id}`)


export const retrieveToDoApi                                
=(username,id) => apiClient.get(`/users/${username}/todos/${id}`)

export const updateToDoApi                                
=(username,id,todo) => apiClient.put(`/users/${username}/todos/${id}`,todo)     //in update and create operations we also have a request body!

export const createToDoApi                                
=(username,todo) => apiClient.post(`/users/${username}/todos`,todo)


//basic authentication service
export const executeBasicAuthenticationService
=(token) => apiClient.get("/basicauth",{   //we are calling basicauth with the token which is passed in
    headers:{                  //we have an object here . As part of the object we have headers
        Authorization: token
    }
})