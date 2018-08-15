import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            summa: 0,
            arivoidenlkm: 0
        }
    }


    annaHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1, 
            summa: this.state.summa + 1,
            arivoidenlkm: this.state.arivoidenlkm + 1
        })
    }

    annaNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1,
            summa: this.state.summa + 0,
            arivoidenlkm: this.state.arivoidenlkm + 1
        })
    }

    annaHuono = () => {
        this.setState({
            huono: this.state.huono + 1,
            summa: this.state.summa - 1,
            arivoidenlkm: this.state.arivoidenlkm +1
        })
    }

    keskiarvo =() => {
        
        return this.state.summa / this.state.arivoidenlkm

    }

    render() {
        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>

                    <button onClick={this.annaHyva}>Hyvä</button>
                    <button onClick={this.annaNeutraali}>Neutraali</button>
                    <button onClick={this.annaHuono}>Huono</button>
                    
                    <h1>statistiikka</h1>

                    <div>
                        <p>Hyvä {this.state.hyva}</p>
                        <p>Neutraali {this.state.neutraali}</p>
                        <p>Huono {this.state.huono}</p>
                        <p>keskiarvo {this.keskiarvo()}</p>
                        <p>positiivisia {100 * (this.state.hyva / this.state.arivoidenlkm)}</p>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);


