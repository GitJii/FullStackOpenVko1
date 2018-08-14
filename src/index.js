import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'

    const osat = [
        {
            nimi: 'Reactin perusteet',
            tehtavia: 10
        },
        {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
        },
        {
            nimi: 'Komponenttien tila',
            tehtavia: 14
        }
    ]

    const Otsikko = () => {
        return (
            <div>
                <h1>{kurssi}</h1>
            </div>
        )
    }

    const Sisalto = () => {

        const tiedot = osat.map((osa) => osa.nimi + ' ' + osa.tehtavia)

        return (
            <div>
                <p>{tiedot[0]}</p>
                <p>{tiedot[1]}</p>
                <p>{tiedot[2]}</p>
            </div>
        )
    }

    const Yhteensa = () => {

        function summa(p1, p2, p3) {
            return p1 + p2 + p3
        }

        const lukumaara = summa(osat[0].tehtavia, osat[1].tehtavia, osat[2].tehtavia)

        return (
            <div>
                <p>yhteensä {lukumaara} tehtävää </p>
            </div>
        )
    }

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osat={osat} />
            <Yhteensa osat={osat} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

