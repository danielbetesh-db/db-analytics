
import {projectFields, fieldValidationStatuses} from '../Config/Constants'



function KeyGenerator(){
    const KEY_LENGTH = 10;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < KEY_LENGTH; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function fieldsToObject(fields){
    let result = []
    fields.map(x => result.push('"' + x.name + '":"' +  x.state.value + '"'))
    return JSON.parse("{" + result.join(',') + "}")
}

const prepareUpdateFormFields = (row) => {
    let fields = projectFields();
    let hiddenField = {...fields[0],
         name : 'project_id', 
         placeholder : '', 
         type: 'hidden', 
         state : {
            value : row.project_id,
            status : fieldValidationStatuses.VALID
    }};

    fields.map(field => {
        switch(field.name){
            case 'project_name' : field.state = {value : row.project_name, status : fieldValidationStatuses.VALID }; break;
            case 'page_url' : field.state = {value : row.page_url, status : fieldValidationStatuses.VALID }; break;
            case 'response_page' : field.state = {value : row.response_page, status : fieldValidationStatuses.VALID }; break;
            case 'error_page' : field.state = {value : row.error_page, status : fieldValidationStatuses.VALID }; break;
            case 'emails' : field.state = {value : row.emails, status : fieldValidationStatuses.VALID }; break;
        }
    })
    fields.push(hiddenField)
    return fields;
}


export { KeyGenerator, fieldsToObject, prepareUpdateFormFields }