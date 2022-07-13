import { KeyGenerator } from "../Utils/Utils";


const Table = (props) => {

    const rows = props.maxRows && props.children ? props.children.splice(0, props.maxRows) : props.children;

    return (
        <div>
            <table className={props.className ? 'table ' + props.className : 'table' }>
                <thead>
                    <tr>
                        {props.headers.map(name => <th key={KeyGenerator()}>{name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}


const TableRow = (props) => {
    return(
        <tr {...props}>{props.children}</tr>
    )
}

const TableCell = (props) => {
    return(
        <td {...props}>{props.children}</td>
    )
}

export { Table, TableRow, TableCell };