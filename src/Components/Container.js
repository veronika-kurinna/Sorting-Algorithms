import React from "react";
import { mergeSort, quickSort, shuffleElements } from "./Sorting";
import { bubbleSort } from "./Sorting";  
import { insertionSort } from "./Sorting";
import { selectionSort } from "./Sorting";

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
                    Delay, ms  <input type="number" defaultValue={this.state.delay} onChange={this.updateDelay} min={0} step={100}/>
                </form>
                <button onClick={() => shuffleElements(this.state.numbers, this.updateNumbers)}>Shuffle Elements</button>
                <button onClick={() => bubbleSort(this.state.numbers, this.updateNumbers, this.state.delay)}>Bubble Sort</button>
                <button onClick={() => insertionSort(this.state.numbers, this.updateNumbers, this.state.delay)}>Insertion Sort</button>
                <button onClick={() => selectionSort(this.state.numbers, this.updateNumbers, this.state.delay)}>Selection Sort</button>
                <button onClick={() => quickSort(this.state.numbers, this.updateNumbers, this.state.delay)}>Quick Sort</button>
                <button onClick={() => mergeSort(this.state.numbers, this.updateNumbers, this.state.delay)}>Merge Sort</button>
            </div>
        )
    }
}

const Column = (props) => {
    return <div style={{ height: props.height, width: 30, backgroundColor: 'bisque', margin: 10}}>{props.height}</div>
}





