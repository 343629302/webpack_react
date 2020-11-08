import React from 'react';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), text: 0 };
        this.numbers = [1, 2, 4, 5, 6, 7, 8];
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    handleClick() {
        this.setState({
            text: this.state.text + 1,
        });
    }

    render() {
        return (
            <div>
                <h1 onClick={() => this.handleClick()}>
                    Hello, world!{this.state.text}
                </h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <ul>
                    {this.numbers.map((number) => (
                        <li key={number.toString()}>{number}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default hot(App);
