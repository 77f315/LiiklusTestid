import React, { useState } from "react";
import './css/question.css'
import questions from "./data";

const Question = () => {
    let [index , setIndex] = useState(0);
    
    const nextQuestion = () => {
        if (index < questions.length - 1){
            setIndex(index + 1);}
    }
    const previousQuestion = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    const question = questions[index];
    return (
        <div className="container">
            <h1>Test</h1>
            <hr/>
            <h2>{question.id}. {question.question}</h2>
            <ul>
                <li>{question.options[0].text}</li>
                <li>{question.options[1].text}</li>
                {question.options[2] &&<li>{question.options[2].text}</li>}
                {question.options[3] && <li>{question.options[3].text}</li>}

        
            </ul>
            <div className="question-container">
                <button onClick={previousQuestion}>eelmine küsimus</button>
                <button onClick={nextQuestion}>Järgmine küsimus</button>
            </div>
            <div className="index">question {question.id} of {questions.length}</div>
        </div>
    )
}
export default Question;