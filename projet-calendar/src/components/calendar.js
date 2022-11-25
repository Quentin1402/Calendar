import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Frame = styled.div`
    width: 98%;
    border: 1px solid lightgrey;
    box-shadow: 2px 2px 2px #eee;
`;

const Header = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 10px 5px 10px;
    display: flex;
    justify-content: space-between;
    background-color: #f5f6fa;
`;

const Button = styled.div`
    cursor: pointer;
`;

const Button2 = styled.div`
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    background-color: #f5f6fa;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const Day = styled.div`
    width: 14.2%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${(props) =>
        props.isToday &&
        css`
        border: 1px solid #000;
        background-color: #0000ff
    `}

    ${(props) =>
        props.isSelected &&
        css`
        background-color: #ff0000;
    `}
`;

export function Calendar() {
    const jour = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const jour_semaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const mois = ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DECEMBRE'];
    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(getStartDayOfMonth(date));
    }, [date]);

    function getStartDayOfMonth(date) {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return startDate === 0 ? 7 : startDate;
    }

    function bisextile(year) {
        return year % 4 === 0;
    }

    if(bisextile(year) === true) {
        jour[1] = 29;
    } else {
        jour[1] = 28;
    }

    const days = jour;

    return (
        <Frame>
            <center><Button2 onClick={() => document.getElementById("form").hidden = 'false'}>Reserver</Button2></center>
            <Header>
                <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
                <div>
                    {mois[month]} {year}
                </div>
                <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
            </Header>
            <Body>
                {jour_semaine.map((d) => (
                    <Day key={d}>
                        <strong>{d}</strong>
                    </Day>
                ))}
                {Array(days[month] + (startDay - 1))
                    .fill(null)
                    .map((_, index) => {
                        const d = index - (startDay - 2);
                        return (
                            <Day
                                key={index}
                                isToday={d === today.getDate()}
                                isSelected={d === day}
                                lejour = {d + "/" + month + "/" + year}
                                onClick={() => setDate(new Date(year, month, d))}
                            >
                                {d > 0 ? d : ''}
                            </Day>
                        );
                    })}
            </Body>
        </Frame>
    );
}
