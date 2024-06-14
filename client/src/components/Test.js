import React from "react";
import './css/Test.css';
import questions from "./data";
function Test() {
    return (
        <>
        <div className="topbar"><h1>Test {questions[0].testnr}</h1></div>
        <div className="container">
            <div className="sidebar"></div>
            <div className="questions">
                <div className="question"> 
                    <h2>{questions[0].id}. {questions[0].question}</h2>
                    <form>
                        <input type="radio" id="option-a" name="answer" value="a" />
                        <label htmlFor="option-a">{questions[0].options[0].text}</label><br />
                        <input type="radio" id="option-b" name="answer" value="b" />
                        <label htmlFor="option-b">{questions[0].options[1].text}</label><br />
                    </form>
                </div>
                <div className="question"> 
                    <h2>1. Millised dokumendid peavad autojuhil kaasas olema kontrollijale esitamiseks, kui ei sõideta ainult Eesti piires?</h2>
                    <form>
                        <input type="radio" id="option-a" name="answer" value="a" />
                        <label htmlFor="option-a">a. Tervisetõend</label><br />
                        <input type="radio" id="option-b" name="answer" value="b" />
                        <label htmlFor="option-b">b. Juhiluba või muu juhtimisõigust tõendav dokument</label><br />
                    </form>
                </div>
               
            </div>
        </div>
        </>
    );
}

export default Test;
