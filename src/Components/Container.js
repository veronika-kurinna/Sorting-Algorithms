import React from "react";
import { bubbleSort } from "./Sorting";  

export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: props.numbers
        };
    }

    updateNumbers = (numbers) => this.setState(numbers)

    render() {
        return (
            <div>
                <div className="container">
                    { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                </div>
                <button onClick={() => bubbleSort(this.state.numbers, this.updateNumbers)}>Bubble Sort</button>
            </div>
        )
    }
}

const Column = (props) => {
    return <div style={{ height: props.height, width: 50, backgroundColor: 'bisque', margin: 10}}>{props.height}</div>
}





