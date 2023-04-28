import React from "react";
import { bubbleSort } from "./Sorting";  

export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: props.numbers,
            delay: 300
        };
    }

    updateNumbers = (numbers) => this.setState(numbers)

    updateDelay = (e) => {
        this.setState({delay: Number(e.target.value)})
    } 

    render() {
        return (
            <div>
                <div className="container">
                    { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                </div>
                <form>
                    Delay, ms  <input type="number" defaultValue={this.state.delay} onChange={this.updateDelay}/>
                </form>
                <button onClick={() => bubbleSort(this.state.numbers, this.updateNumbers, this.state.delay)}>Bubble Sort</button>
            </div>
        )
    }
}

const Column = (props) => {
    return <div style={{ height: props.height, width: 50, backgroundColor: 'bisque', margin: 10}}>{props.height}</div>
}





