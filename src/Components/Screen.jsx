const Column = (props) => {
    return (
        <div style={{ height: props.height, width: 30, backgroundColor: 'cornflowerblue', margin: 5, borderRadius: '5px'}}>
            {props.height}
        </div>
    )
}

export function Columns(props){
    return(
        <div className="container">
            <div className="columns">
                { props.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
            </div>
        </div>
    )
}