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
        return () => {
            this.setState({
                hyva: this.state.hyva + 1,
                summa: this.state.summa + 1,
                arivoidenlkm: this.state.arivoidenlkm + 1
            })
        }
    }

    annaNeutraali = () => {
        return () => {
            this.setState({
                neutraali: this.state.neutraali + 1,
                summa: this.state.summa + 0,
                arivoidenlkm: this.state.arivoidenlkm + 1
            })
        }
    }

    annaHuono = () => {
        return () => {
            this.setState({
                huono: this.state.huono + 1,
                summa: this.state.summa - 1,
                arivoidenlkm: this.state.arivoidenlkm + 1
            })
        }
    }
    keskiarvo = () => {
        return this.state.summa / this.state.arivoidenlkm
    }

    render() {
        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>

                    <Button handleClick={this.annaHyva()}
                        text="Hyvä"
                    ></Button>

                    <Button handleClick={this.annaNeutraali()}
                        text="Neutraali"
                    ></Button>

                    <Button handleClick={this.annaHuono()}
                        text="Huono"
                    ></Button>

                    <h1>statistiikka</h1>

                    <div>
                        
                        
                        {Statistic ({ teksti: 'Hyvä', tulos: this.state.hyva}) }
                        
                        
                        
                        <p>Hyvä {this.state.hyva}</p>
                        <p>Neutraali {this.state.neutraali}</p>
                        <p>Huono {this.state.huono}</p>
                        <p>keskiarvo {this.keskiarvo()}</p>
                        <p>positiivisia {100 * (this.state.hyva / this.state.arivoidenlkm)} %</p>
                    </div>
                </div>
            </div>
        )
    }
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = () => (
    <p>Statistiikka</p>
)

const Statistic = (teksti, tulos) => {
    return  () => {
        <p>{teksti} {tulos}</p>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
