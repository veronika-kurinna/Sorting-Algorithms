import React from "react";

export class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 50
        };

    }

    updateHeight = (e) =>{
        this.setState({height: Number(e.target.value)})
    }

    render() {
        return (
            <div>
                <input type="text" className="number" onChange={this.updateHeight} value={this.state.height}/>
                <div className="column">
                    <Col height={this.state.height}/>
                </div>
            </div>
        )
    }
}

const Col = (props) => {
    return <div style={{ height: props.height, width: 50, backgroundColor: 'bisque'}}>{props.height}</div>
}

let myState = {
    height: 5,
    width: 14,
    nameAnimal: "Cat"
}

function MySetState(variable){
    myState = variable;

    // myState = {
    //     height: variable.height,
    //     width: variable.width,
    //     nameAnimal: variable.nameAnimal
    // }
}

MySetState({height: 10});
console.log(myState);


