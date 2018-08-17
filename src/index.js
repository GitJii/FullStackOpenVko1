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
            arvioidenlkm: 0
        }
    }

    annaHyva = () => {
        return () => {
            this.setState({
                hyva: this.state.hyva + 1,
                summa: this.state.summa + 1,
                arvioidenlkm: this.state.arvioidenlkm + 1
            })
        }
    }

    annaNeutraali = () => {
        return () => {
            this.setState({
                neutraali: this.state.neutraali + 1,
                summa: this.state.summa + 0,
                arvioidenlkm: this.state.arvioidenlkm + 1
            })
        }
    }

    annaHuono = () => {
        return () => {
            this.setState({
                huono: this.state.huono + 1,
                summa: this.state.summa - 1,
                arvioidenlkm: this.state.arvioidenlkm + 1
            })
        }
    }

    render() {

        const tulokset = () => {            
            if (this.state.arvioidenlkm === 0) {
                return (
                    <div>
                        <em>Anna arvostelu niin näet, mitä muut ovat äänestäneet</em>
                    </div>
                )
            }
            return (
                <div>
                    <Statistics tila ={this.state}/>
                </div>
            )
        }
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

                    {tulokset()}

                </div>
            </div>
        )
    }
}

const Statistics = (props) => {
    const tilat = props.tila
    const keskiarvo = tilat.summa / tilat.arvioidenlkm
    const positiivisia = 100 * (tilat.hyva / tilat.arvioidenlkm) + '%'

    return (
        <div>
            <Statistic teksti='Hyvä ' tulos={tilat.hyva} />
            <Statistic teksti='Neutraali ' tulos={tilat.neutraali} />
            <Statistic teksti='Huono ' tulos={tilat.huono} />

            <Statistic teksti='Keskiarvo ' tulos={keskiarvo} />
            <Statistic teksti='Positiivisia ' tulos={positiivisia} />
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = (props) => {
    return <p>{props.teksti} {props.tulos}</p>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
