
import {API_URL} from '../Config/Constants'


const response = (path, requestOptions, callback) => {
    console.log(requestOptions);
    fetch(path, {...requestOptions,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }}
    )  
    .then(response => response.json())
    .then(data => { 
        callback({...{success : true, message : ''}, ...data}) 
    })
    .catch(error => {
        callback({success : false, message : error.message, localError : true, data : []})
    })
}

function parseParams(params){
    try{
        return JSON.parse(params);
    }catch(e){
        return null
    }
}
    
export const Login = (email, password, callback) => {
    response(API_URL + 'account/login', {
        method: 'POST',
        body: JSON.stringify({ email: email, password: password })
    }, callback )
}

export const createAccount = (accountFields, callback) => {
    response(API_URL + 'account/createAccount', {
        method: 'POST',
        body: JSON.stringify(accountFields)
    }, callback )
}

export const createProject = (projectsFields, callback) => {
    response(API_URL + 'projects/createproject', {
        method: 'POST',
        body: JSON.stringify(projectsFields)
    }, callback )
}

export const readAllProjects = (accountId, callback) => {
    response(API_URL + 'projects/readallprojects/' + accountId, {
        method: 'GET'
    }, callback )
}
