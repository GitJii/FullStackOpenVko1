import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
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
    }

    const Otsikko = () => {
        return (
            <div>
                <h1>{kurssi.nimi}</h1>
            </div>
        )
    }

    const Sisalto = () => {

        const tiedot = kurssi.osat.map((osa) => osa.nimi + ' ' + osa.tehtavia)

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

        const lukumaara = summa(kurssi.osat[0].tehtavia, kurssi.osat[1].tehtavia, kurssi.osat[2].tehtavia)

        return (
            <div>
                <p>yhteensä {lukumaara} tehtävää </p>
            </div>
        )
    }

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

