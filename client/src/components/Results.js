import React from 'react';
import {useNavigate } from 'react-router-dom';
const Results = () => {
    const navigate = useNavigate();
    const correct = window.localStorage.getItem('correct');
    const wrong = window.localStorage.getItem('wrong');
    return (
        <div>
            <h1>{Number(correct) + 1 } out of {Number(correct) +Number(wrong) + 1}</h1>
            <button onClick={() => navigate("/")}>again</button>
        </div>
    );
}

export default Results;