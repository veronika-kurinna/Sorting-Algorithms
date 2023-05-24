export function Button(props){
    return(
        <div>
            <button className="btn btn-light" onClick={props.function} disabled={props.disabled}>{props.name}</button>
        </div>
    )
}