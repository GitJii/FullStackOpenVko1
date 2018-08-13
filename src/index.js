import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    const Otsikko = (props) => {
        return (
            <div>
                    <h1>{kurssi}</h1>
            </div>    
        )
    }

    const Osa1 = (props) => {
        return (
            <div>
              <p>{osa1} {tehtavia1}</p>    
            </div>
        )
    }

    const Osa2 = (props) => {
        return (
            <div>
              <p>{osa2} {tehtavia2}</p>    
            </div>
        )
    }
    
    const Osa3 = (props) => {
        return (
            <div>
              <p>{osa3} {tehtavia3}</p>    
            </div>
        )
    }

    const Sisalto = (props) => {
        return (
            <div>
                <Osa1 />
                <Osa2 />
                <Osa3 />
            </div>
        )
    }

    const Yhteensa = (props) => {
        return (
            <div> 
                <p>yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää </p>
            </div>
        )
    }

    return (
        <div>
            <Otsikko kurssi={kurssi}/>
            <Sisalto />
            <Yhteensa />
        </div>
    )
}

ReactDOM.render(
<App />,
document.getElementById('root')
);

