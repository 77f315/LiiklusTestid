import React, { useState } from "react";
import './css/question.css'
import questions from "./data";
const Question = () => {
    
    return (
        <div className="container">
            <h1>Test</h1>
            <hr/>
            <h2>QUESTION ?????</h2>
            <ul>
                <li>a choiche a</li>
                <li>b choiche b</li>
                <li>c choiche c</li>
                <li>d choiche d</li>
            </ul>
            <button>Järgmine küsimus</button>
            <div className="index">question 1 of 120</div>
        </div>
    )
}
export default Question;