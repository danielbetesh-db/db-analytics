import React, { useEffect, useRef, useState } from 'react'
import {KeyGenerator} from '../Utils/Utils'
import { TextField } from './TextField'
import * as constants from '../Config/Constants'
import { Loader } from '../Components/Loader'

const Form = (props) => {
    const initialState = {
        status : constants.fieldValidationStatuses.IDLE,
        errorMessages : []
    }
    
    const [formState, setFormState] = useState(initialState)
    const [isLoading, setLoader] = useState(props.isLoading)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        let errorMessages = []
        const errorFields = props.formFields.filter(field => field.require === true && field?.state?.status != constants.fieldValidationStatuses.VALID);
        const isError = errorFields.length > 0
        if(isError){          
            errorFields.map(field => 
                errorMessages.push('The field ' + field.placeholder + ' is requierd.')
            )
        }

        const nextFormState = {...formState,
            status : isError ? constants.fieldValidationStatuses.NOT_VALID : constants.fieldValidationStatuses.VALID,
            errorMessages : errorMessages
        }
        
        
        if(props.onSubmit){
             props.onSubmit(props.formFields, nextFormState, { setLoader, setFormState })
        }
        setFormState(nextFormState)
    }

    return(
        <form
            className={'form ' + props.className} 
            style={props.style} 
            onSubmit={onSubmitHandler}>

                {props.formFields.map(field => 
                    <TextField {...field}
                        key={KeyGenerator()} 
                        disabled={isLoading}
                        onChange={(state) => {
                            field.state = state
                        }} 
                    />
                )}
                
            <div className='submit-field'>
                <input type='submit' disabled={isLoading} className={props.buttonClass} value={props.buttonText} /> 
            </div>
            
            {formState.errorMessages.length ?
                <div className='error-message'> 
                    {formState.errorMessages.map(message => <div key={KeyGenerator()}>{message}</div>)}
                </div> 
                :
                ''
            }

            {isLoading ? <Loader /> : '' }
            
        </form>
    )
}



export {Form }