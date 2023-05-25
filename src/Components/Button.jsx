export function Button(props){
    return(
        <button className="btn btn-light mt-4 ms-4" onClick={props.function} disabled={props.disabled}>{props.name}</button>
    )
}