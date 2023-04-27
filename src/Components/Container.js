import React from "react";

export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: props.numbers
        };

    }

    updateHeight = (e) =>{
        this.setState({height: Number(e.target.value)})
    }

    delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    }
    
    bubbleSort = async () => {
        let columnsChanged = this.state.numbers;
    
        for (let i = 0; i < columnsChanged.length; i++) {
            for (let j = 0; j < columnsChanged.length - 1; j++) {
                if (columnsChanged[j] > columnsChanged[j + 1]) {
                    await this.delay(300);
                    let temp = columnsChanged[j] 
                    columnsChanged[j] = columnsChanged[j + 1];
                    columnsChanged[j + 1] = temp;
                    this.setState(columnsChanged);
                }
            }
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.state.numbers.map((number, index)=>
                    <Column height={number} value={number} key={index}/>)}
                </div>
                <button onClick={this.bubbleSort}>Bubble Sort</button>
            </div>
        )
    }
}

const Column = (props) => {
    return <div style={{ height: props.height, width: 50, backgroundColor: 'bisque', margin: 10}}>{props.height}</div>
}





