

const Button = (props) => {
    const filteredProps = {...props}
    delete filteredProps.containerClass
    
    return(
        <div className={props.containerClass ? "btn-field " + props.containerClass : "btn-field"}>
            <button {...filteredProps} 
                onClick={props.onClick}>
                    {props.children}
            </button>
        </div>
        
    )

}

export default Button 