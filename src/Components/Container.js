import React from "react";

export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: props.numbers
        };

    }

    updateHeight = (e) =>{
        this.setState({height: Number(e.target.value)})
    }

    changeColumn = () => {
        let columnsChanged = this.state.numbers;
        let temp = columnsChanged[0] 
        columnsChanged[0] = columnsChanged[2];
        columnsChanged[2] = temp;
        this.setState(columnsChanged);
    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.state.numbers.map((number, index)=>
                    <Column height={number} value={number} key={index}/>)}
                </div>
                <button onClick={this.changeColumn}>Change column</button>
            </div>
        )
    }
}

const Column = (props) => {
    return <div style={{ height: props.height, width: 50, backgroundColor: 'bisque', margin: 10}}>{props.height}</div>
}



