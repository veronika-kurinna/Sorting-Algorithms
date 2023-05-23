import React from "react";
import { sortingMap, complexity } from "./Sorting";
import { shuffleElements, generateArray } from "./Elements"
import { Columns } from "./Column";

export class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numbers: generateArray(),
            sortingDictionary: sortingMap,
            selectedSorting: sortingMap.get('Bubble Sort'),
            complexity: complexity.get('Bubble Sort'),
            isSorting: false,
            delay: 100
        }
    }
    
    updateNumbers = (numbers) => this.setState(numbers);

    updateSorting = (e) => {
        this.setState({ selectedSorting: this.state.sortingDictionary.get(e.target.value)});
        this.setState({ complexity: complexity.get(e.target.value)})
    }

    sort = async () => {
        this.setState({
            isSorting: true
        });
        await this.state.selectedSorting(this.state.numbers, this.updateNumbers, this.state.delay);
        this.setState({
            isSorting: false
        });
    }

    shuffle = () => {
        shuffleElements(this.state.numbers, this.updateNumbers);
    }

    updateDelay = (e) => {
        this.setState({delay: Number(e.target.value)})
    }
    
    render() {
        return (
            <div>
                <div className="inputs">
                    <div className="row">
                       <label className="col-sm-4 col-form-label">Delay</label>
                       <div className="col">
                            <input type="number" className="form-control" id="form" defaultValue={100} onChange={this.updateDelay} min={0} step={100}/>
                       </div>
                    </div>
                    <div className="dropdown">
                        <select onChange={this.updateSorting} defaultValue={this.state.selectedSorting} className="form-select">
                            {
                                Array.from(this.state.sortingDictionary.keys()).map((value, index) =>
                                    <option value={value} key={index}>{value}</option>)
                            }
                        </select>
                    </div>
                </div>
                <Columns numbers={this.state.numbers}/>
                <div className="container">
                    <div className="bottom">
                        <h5 className="complexity">Complexity: {this.state.complexity}</h5>
                        <Button shuffle={this.shuffle} sort={this.sort} disabled={this.state.isSorting}/>
                    </div>
                </div>
            </div>
        )
    }
}

function Button(props){
    return(
        <div>
            <button className="btn btn-light" onClick={props.shuffle} disabled={props.disabled}>
                Shuffle Elements
            </button>
            <button className="btn btn-light" onClick={props.sort} disabled={props.disabled}>Sort Elements</button>
        </div>
    )
}

