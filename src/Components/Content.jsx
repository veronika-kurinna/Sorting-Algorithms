import React from "react";
import { sortingMap } from "../Scripts/Sorting/Sortings";
import { shuffle, generateArray } from "../Scripts/ArrayFunctions"
import { Screen } from "./Screen";
import { Button } from "./Button";

export class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: generateArray(),
            sortingMap: sortingMap,
            selectedSorting: sortingMap.get('Bubble Sort'),
            isSorting: false,
            delay: 100
        }
    }
    
    updateNumbers = (array) => this.setState(array);

    updateSorting = (e) => {
        this.setState({selectedSorting: this.state.sortingMap.get(e.target.value)});
    }

    sortClickHandler = async () => {
        this.setState({isSorting: true});
        await this.state.selectedSorting.function(this.state.array, this.updateNumbers, this.state.delay);
        this.setState({isSorting: false});
    }

    shuffleClickHandler = () => {
        shuffle(this.state.array, this.updateNumbers);
    }

    updateDelay = (e) => {
        this.setState({delay: Number(e.target.value)})
    }
    
    render() {
        return (
            <div>
                <div className="inputs mt-4">
                    <div className="row">
                       <label className="col-sm-4 col-form-label">Delay</label>
                       <div className="col">
                            <input type="number" className="form-control me-3" id="form" defaultValue={100} onChange={this.updateDelay} 
                                min={0} step={100} disabled={this.state.isSorting}/>
                       </div>
                    </div>
                    <div className="dropdown">
                        <select onChange={this.updateSorting} defaultValue={this.state.selectedSorting} className="form-select" 
                            disabled={this.state.isSorting} >
                            {
                                Array.from(this.state.sortingMap.keys()).map((value, index) =>
                                    <option value={value} key={index}>{value}</option>)
                            }
                        </select>
                    </div>
                </div>
                <Screen array={this.state.array}/>
                <div className="container">
                    <div className="bottom">
                        <div>
                            <h5 className="complexity mt-4">Time complexity: {this.state.selectedSorting.timeComplexity}</h5>
                            <h5 className="complexity mt-4">Memory complexity: {this.state.selectedSorting.memoryComplexity}</h5>
                        </div>
                        <div>
                            <Button function={this.shuffleClickHandler} disabled={this.state.isSorting} name={'Shuffle Elements'}/>
                            <Button function={this.sortClickHandler} disabled={this.state.isSorting} name={'Sort Elements'}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}