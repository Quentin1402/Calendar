import * as React from 'react';
import { Calendar } from './components/calendar';
import styled from 'styled-components';

import './style.css';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
    return (
        <Container>
            <h1>Calendrier</h1>
            <Calendar />
            <div id="form">
                <h1>
                    Rendez-vous
                </h1>
                <label>
                    Nom :
                    <input type="text" defaultValue="Entrez votre nom"/>
                </label>
                <br></br>
                <label>
                    Prenom :
                    <input type="text" defaultValue="Entrez votre prenom"/>
                </label>
                <br></br>
                <label>
                    Date :
                    <input type="text" defaultValue="date format aaaa/mm/jj"/>
                </label>
                <br></br>
                <label>
                    Motif :
                    <input type="text" defaultValue="motif de rendez-vous"/>
                </label>
                <br></br>
                <input type="submit" value="Envoyer" />
            </div>
        </Container>
    );
}

export default App;