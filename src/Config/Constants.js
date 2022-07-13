


export const API_URL = 'https://digcard.co.il/web_api/'
//export const API_URL = 'http://localhost/web_api/'



export const projectFields  = () =>{
    return  [
        {
            name : 'project_name',
            type : 'text',
            placeholder : 'Project Name',
            require: true
        },
        {
            name : 'page_url',
            type : 'text',
            placeholder : 'Page Url',
            require: true
        },
        {
            name : 'response_page',
            type : 'text',
            placeholder : 'Response Page',
            require: true
        },
        {
            name : 'error_page',
            type : 'text',
            placeholder : 'Error Page',
            require: true
        },
        {
            name : 'emails',
            type : 'text',
            regex : '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
            placeholder : 'Emails',
            require: true
        }
    ]
}

export const accountFields = () => {
    return [
        {
            name : 'email',
            placeholder : 'Email',
            type : 'text',
            require: true,
            regex : '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
        },
        {
            name : 'password',
            placeholder : 'Password',
            type : 'password',
            require: true
        },
        {
            name : 'first_name',
            placeholder : 'First Name',
            type : 'text',
            require: true
        },
        {
            name : 'last_name',
            placeholder : 'Last Name',
            type : 'text',
            require: true
        }
    ]
}



export const fieldValidationStatuses = {
    IDLE : 'idle',
    EMPTY : 'empty',
    VALID : 'valid',
    NOT_VALID : 'nvalid'
}