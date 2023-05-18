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
                <div className="input-group">
                    <span className="input-group-text">Delay, ms</span>
                    <div className="delay">
                        <input type="number" className="form-control" defaultValue={100} onChange={this.updateDelay} min={0} step={100}></input>
                    </div>
                </div>
                
                <div className="container">
                    <div class="dropdown">
                        <select onChange={this.updateSort} defaultValue={this.state.selectedSorting} class="form-select">
                            {Array.from(this.state.sorting.keys()).map((value, index) =>
                                <option value={value} key={index}>{value}</option>)
                            }
                        </select>
                    </div>

                    <div className="columns">
                        { this.state.numbers.map((number, index) => <Column height={number} value={number} key={index}/>) }
                    </div>
                </div>

                <button className="btn btn-light" onClick={() => shuffleElements(this.state.numbers, this.updateNumbers)} disabled={this.state.isSorting}>Shuffle Elements</button>
                <button className="btn btn-light" onClick={async () => await this.handlerClick()} disabled={this.state.isSorting}>Sort Elements</button>
            </div>
        )
    }
}

const Column = (props) => {
    return <div style={{ height: props.height, width: 30, backgroundColor: 'cornflowerblue', margin: 5, borderRadius: '5px'}}>{props.height}</div>
}