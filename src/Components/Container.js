import React from "react";
import { mergeSort, quickSort, shuffleElements, bubbleSort, insertionSort, selectionSort } from "./Sorting";
import { generateArray } from "./Sorting";

export class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            delay: 100
        }
    }
    updateDelay = (e) => {
        this.setState({delay: Number(e.target.value)})
    }

    render() {
        return (
            <div>
                <form>
                    Delay, ms  <input type="number" defaultValue={100} onChange={this.updateDelay} min={0} step={100}/>
                </form>
                <div className="container">
                    <SortingContainer delay={this.state.delay} sortingName={"Bubble sort"} sort={bubbleSort} />
                    <SortingContainer delay={this.state.delay} sortingName={"Insertion sort"} sort={insertionSort} />
                    <SortingContainer delay={this.state.delay} sortingName={"Selection sort"} sort={selectionSort} />
                    <SortingContainer delay={this.state.delay} sortingName={"Quick sort"} sort={quickSort}/>
                    <SortingContainer delay={this.state.delay} sortingName={"Merge sort"} sort={mergeSort}/>
                </div>
            </div>
        )
    }
}

class SortingContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: generateArray(), 
            isSorting: false,
        }
    }
    updateNumbers = (numbers) => this.setState(numbers);

    handlerClick = async () => {
        this.setState({
            isSorting: true
        });
        await this.props.sort(this.state.numbers, this.updateNumbers, this.props.delay);
        this.setState({
            isSorting: false
        });
    }

    render() {
        return (
            <div>
                <div className="item">
                    { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                </div>
                <button onClick={() => shuffleElements(this.state.numbers, this.updateNumbers)} disabled={this.state.isSorting}>Shuffle Elements</button>
                <button onClick={async () => await this.handlerClick()} disabled={this.state.isSorting}>{this.props.sortingName}</button>
            </div>
        )
    }
}

const Column = (props) => {
    return <div style={{ height: props.height, width: 30, backgroundColor: 'bisque', margin: 5}}>{props.height}</div>
}