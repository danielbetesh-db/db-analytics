


export const API_URL = 'http://localhost:5288/'



export const projectFields  = () =>{
    return  [
        {
            name : 'ProjectName',
            type : 'text',
            placeholder : 'Project Name',
            require: true
        },
        {
            name : 'RecivePath',
            type : 'text',
            placeholder : 'Page Url',
            require: true
        },
        {
            name : 'ResponsePath',
            type : 'text',
            placeholder : 'Response Page',
            require: true
        },
        {
            name : 'ErrorPath',
            type : 'text',
            placeholder : 'Error Page',
            require: true
        },
        {
            name : 'Emails',
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
            name : 'Email',
            placeholder : 'Email',
            type : 'text',
            require: true,
            regex : '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
        },
        {
            name : 'Password',
            placeholder : 'Password',
            type : 'password',
            require: true
        },
        {
            name : 'FirstName',
            placeholder : 'First Name',
            type : 'text',
            require: true
        },
        {
            name : 'LastName',
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