import React from "react";
import { shuffleElements, generateArray, sorting} from "./Sorting";

export class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numbers: generateArray(),
            sorting: sorting,
            selectedSorting: sorting.get('Bubble Sort'),
            isSorting: false,
            delay: 100
        }
    }
    updateNumbers = (numbers) => this.setState(numbers);

    updateSort = (e) => {
        this.setState({ selectedSorting: this.state.sorting.get(e.target.value)});
    }

    handlerClick = async () => {
        this.setState({
            isSorting: true
        });
        await this.state.selectedSorting(this.state.numbers, this.updateNumbers, this.state.delay);
        this.setState({
            isSorting: false
        });
    }

    updateDelay = (e) => {
        this.setState({delay: Number(e.target.value)})
    }

    render() {
        return (
            <div>
                <form>
                    Delay, ms  <input type="number" defaultValue={100} onChange={this.updateDelay} min={0} step={100} id="number"/>
                </form>
                <div className="container">
                    <div className="item">
                        { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                    </div>
                </div>
                <button onClick={() => shuffleElements(this.state.numbers, this.updateNumbers)} disabled={this.state.isSorting}>Shuffle Elements</button>
                <select onChange={this.updateSort} defaultValue={this.state.selectedSorting}>
                    {Array.from(this.state.sorting.keys()).map((value, index) =>
                        <option value={value} key={index}>{value}</option>)
                    }
                </select>
                <button onClick={async () => await this.handlerClick()} disabled={this.state.isSorting}>Sort Elements</button>
            </div>
        )
    }
}

const Column = (props) => {
    return <div style={{ height: props.height, width: 30, backgroundColor: 'bisque', margin: 5}}>{props.height}</div>
}