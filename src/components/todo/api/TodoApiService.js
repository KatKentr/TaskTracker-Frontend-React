import axios from 'axios'
import { apiClient } from './ApiClient';


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


