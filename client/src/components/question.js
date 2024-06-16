import React, { useState, useRef } from "react";
import './css/question.css'
import questions from "./data";

const Question = () => {
    let [index , setIndex] = useState(0);
    let [lock, setLock] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];
    const checkAns = (e, ans) => {
        if (lock === false){
        if (question.ans === ans) {
            e.target.classList.add("correct");
            setLock(true);
        } else{
            e.target.classList.add("wrong")
            setLock(true);
            option_array[question.ans -1].current.classList.add("correct");
        }
    }
    }
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
            <ul>
                {question.options[0] && (
                    <li ref={Option1} onClick={(e) => { checkAns(e, 1); }}>
                        {question.options[0].text}
                    </li>
                )}
                {question.options[1] && (
                    <li ref={Option2} onClick={(e) => { checkAns(e, 2); }}>
                        {question.options[1].text}
                    </li>
                )}
                {question.options[2] && (
                    <li ref={Option3} onClick={(e) => { checkAns(e, 3); }}>
                        {question.options[2].text}
                    </li>
                )}
                {question.options[3] && (
                    <li ref={Option4} onClick={(e) => { checkAns(e, 4); }}>
                        {question.options[3].text}
                    </li>
                )}
            </ul>

        
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