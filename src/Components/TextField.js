import React, { useEffect, useState } from 'react'
import * as constants from '../Config/Constants';


//Logic
const TextField = (props) => {
    
    const initialStates = {
        value : '',
        status : constants.fieldValidationStatuses.IDLE,
        focus : false,
        event : null,
        disabled : false
    }
    
    const [fieldState, setFieldState] = useState({ 
        value : props?.state?.value ? props.state.value : '',
        status : props?.state?.status ? props.state.status : constants.fieldValidationStatuses.IDLE,
        focus : props?.state?.focus ? props.state.focus : false,
        event : props?.state?.e ? props.state.e : null,
    });
    

    useEffect(() => {
        if(props.onChange && fieldState.status !== constants.fieldValidationStatuses.IDLE){
            props.onChange(fieldState)
        }
    }, [fieldState.value])

    useEffect(() => {
        if(fieldState.status !== constants.fieldValidationStatuses.IDLE){
            if(fieldState.focus){
                if(props.onFocus){
                    props.onFocus(fieldState)
                }
            }else{
                if(props.onBlur){
                    props.onBlur(fieldState)
                }
            }
        }
        
    }, [fieldState.focus])


    const onChangeHandler = (e) => {
        let newStatus = {...fieldState};
        if(props.regex){
            newStatus = new RegExp(props.regex).test(e.target.value) ?
                constants.fieldValidationStatuses.VALID :
                constants.fieldValidationStatuses.NOT_VALID
        }
        else{
            newStatus = e.target.value == '' ?
                constants.fieldValidationStatuses.EMPTY :
                constants.fieldValidationStatuses.VALID
        }
        setFieldState({...fieldState, value : e.target.value, status : newStatus, event : e })
    }

    const onFocusHandler = (e) => {
        setFieldState({...fieldState, focus : true, event : e })
    }

    const onBlurHandler = (e) => {
        setFieldState({...fieldState, focus : false, event : e })
    }

    

    return(
        <TextFieldView {...props}
            state={fieldState}
            onChange={onChangeHandler} 
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
        />
    )
}

//View
const TextFieldView = (props) => {

    function getClassName(){
        let cls = 'text-field'
        if(props.state.focus){
            cls += ' focus'
        }
        if(props.state.status){
            cls += ' ' + props.state.status
        }

        return cls;
        
    }

    return (
        <div 
            className={
                (props.type !== 'hidden' ? 'text-field' : '') + 
                (props.state.focus ? ' focus' : '') + 
                (props.state.status ? ' ' + props.state.status : '')
            }>
            <label>
                <span>{props.placeholder}</span>
                <input 
                    type={props.type}
                    value={props.state.value}
                    name={props.name}
                    disabled={props.disabled}
                    onChange={e => props.onChange(e)} 
                    onFocus={e => props.onFocus(e)}
                    onBlur={e => props.onBlur(e)}
                />
            </label>
        </div>
        
    )
}
export { TextField, TextFieldView }