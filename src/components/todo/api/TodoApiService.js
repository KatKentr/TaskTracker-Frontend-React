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

