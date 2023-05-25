export function Button(props){
    return(
        <button className="btn btn-light" onClick={props.function} disabled={props.disabled}>{props.name}</button>
    )
}