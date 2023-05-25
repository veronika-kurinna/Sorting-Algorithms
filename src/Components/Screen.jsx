import './../Css/Screen.css';

const Column = (props) => {
    return (
        <div style={{ height: props.height}} className="column m-1">
            {props.height}
        </div>
    )
}

export function Screen(props){
    return(
        <div className="screen">
            { props.array.map((element, index) => <Column height={element} value={element} key={index}/>) }
        </div>
    )
}