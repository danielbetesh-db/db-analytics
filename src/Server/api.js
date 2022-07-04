
import {API_URL} from '../Config/Constants'


const response = (path, requestOptions, callback) => {
    fetch(path, {...requestOptions,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }}
    )  
    .then(response => response.json())
    .then(data => { 
        callback({...{success : true, message : ''}, ...data, params : parseParams(data?.params)}) 
    })
    .catch(error => {
        callback({success : false, message : error.message, data : []})
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
    response(API_URL + 'login/connect', {
        method: 'POST',
        body: JSON.stringify({ Email: email, Password: password })
    }, callback )
}

export const createProject = (projectFields, callback) => {
    response(API_URL + 'api/projects/create-project', {
        method: 'POST',
        body: JSON.stringify(projectFields)
    }, callback )
}
