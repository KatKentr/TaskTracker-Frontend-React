import { apiClient } from "./ApiClient"

//basic authentication service
export const executeBasicAuthenticationService
=(token) => apiClient.get("/basicauth",{   //we are calling basicauth with the token which is passed in
    headers:{                  //we have an object here . As part of the object we have headers
        Authorization: token
    }
})

//JWT authentication service
export const executeJWTAuthenticationService
=(username,password) => apiClient.post("/authenticate",   //we are calling authenticate with the username and password
{username,password})