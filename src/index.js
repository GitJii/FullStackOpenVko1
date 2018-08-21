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

    annaArvio = (tila, arvo) => {
        return () => {
            this.setState({
                [tila]: this.state[tila] + 1,
                summa: this.state.summa + arvo,
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
                    <Statistics tila={this.state} />
                </div>
            )
        }
        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>

                    <Button handleClick={this.annaArvio('hyva', 1)}
                        text="Hyvä"
                    ></Button>

                    <Button handleClick={this.annaArvio('neutraali', 0)}
                        text="Neutraali"
                    ></Button>

                    <Button handleClick={this.annaArvio('huono', - 1)}
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
    const keskiarvo = (tilat.summa / tilat.arvioidenlkm).toFixed(1)
    const positiivisia = (100 * (tilat.hyva / tilat.arvioidenlkm)).toFixed(1) + ' %'

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
    return (
        <table>
            <tbody>
                <tr>
                    <td width="70" >{props.teksti}</td>
                    <td width="70" >{props.tulos}</td>
                </tr>
            </tbody>
        </table>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
