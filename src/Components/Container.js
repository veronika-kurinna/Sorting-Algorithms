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
                <div className="container">
                    <BubbleContainer numbers={generateArray()} delay={this.state.delay}/>
                    <InsertionContainer numbers={generateArray()} delay={this.state.delay}/>
                    <SelectionContainer numbers={generateArray()} delay={this.state.delay}/>
                    <QuickContainer numbers={generateArray()} delay={this.state.delay}/>
                    <MergeContainer numbers={generateArray()} delay={this.state.delay}/>
                </div>
                <form>
                    Delay, ms  <input type="number" defaultValue={100} onChange={this.updateDelay} min={0} step={100}/>
                </form>
            </div>
        )
    }
}

class BubbleContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: props.numbers
        }
    }
    updateNumbers = (numbers) => this.setState(numbers);

    render() {
        return (
            <div>
                <div className="item">
                    { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                </div>
                <button onClick={() => shuffleElements(this.state.numbers, this.updateNumbers)}>Shuffle Elements</button>
                <button onClick={() => bubbleSort(this.state.numbers, this.updateNumbers, this.props.delay)}>Bubble Sort</button>
            </div>
        )
    }
}

class InsertionContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: props.numbers
        }
    }
    updateNumbers = (numbers) => this.setState(numbers);

    render() {
        return (
            <div>
                <div className="item">
                    { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                </div>
                <button onClick={() => shuffleElements(this.state.numbers, this.updateNumbers)}>Shuffle Elements</button>
                <button onClick={() => insertionSort(this.state.numbers, this.updateNumbers, this.props.delay)}>Insertion Sort</button>
            </div>
        )
    }
}

class SelectionContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: props.numbers
        }
    }
    updateNumbers = (numbers) => this.setState(numbers);

    render() {
        return (
            <div>
                <div className="item">
                    { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                </div>
                <button onClick={() => shuffleElements(this.state.numbers, this.updateNumbers)}>Shuffle Elements</button>
                <button onClick={() => selectionSort(this.state.numbers, this.updateNumbers, this.props.delay)}>Selection Sort</button>
            </div>
        )
    }
}

class QuickContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: props.numbers
        }
    }
    updateNumbers = (numbers) => this.setState(numbers);

    render() {
        return (
            <div>
                <div className="item">
                    { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                </div>
                <button onClick={() => shuffleElements(this.state.numbers, this.updateNumbers)}>Shuffle Elements</button>
                <button onClick={() => quickSort(this.state.numbers, this.updateNumbers, this.props.delay)}>Quick Sort</button>
            </div>
        )
    }
}

class MergeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: props.numbers
        }
    }
    updateNumbers = (numbers) => this.setState(numbers);

    render() {
        return (
            <div>
                <div className="item">
                    { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                </div>
                <button onClick={() => shuffleElements(this.state.numbers, this.updateNumbers)}>Shuffle Elements</button>
                <button onClick={() => mergeSort(this.state.numbers, this.updateNumbers, this.props.delay)}>Merge Sort</button>
            </div>
        )
    }
}


const Column = (props) => {
    return <div style={{ height: props.height, width: 30, backgroundColor: 'bisque', margin: 5}}>{props.height}</div>
}