import React from "react";
import './css/Test.css';
import questions from "./data";
function Test() {
    const filteredQuestions = questions.filter(question => question.testnr === 1);

    return (
        <>
        <div className="topbar"><h1>Test {questions[0].testnr}</h1></div>
        <div className="container">
            <div className="sidebar"></div>
            <div className="questions">
                {filteredQuestions.map(question =>
                (<div className="question">
                    <h2>{question.id}. {question.question}</h2>
                    <form>
                        <input type="radio" id="option-a" name="answer" value="a" />
                        <label htmlFor="option-a">{question.options[0].text}</label><br />
                        <input type="radio" id="option-b" name="answer" value="b" />
                        <label htmlFor="option-b">{question.options[1].text}</label><br />
                        <div className="images">
                            {question.image && <img src={question.image} alt='image1'/>}
                            {question.image2 && <img src={question.image2} alt="Image2" />}

                        </div>
                    
                    </form>
                </div>))}
            </div>
        </div>
        </>
    );
}

export default Test;
