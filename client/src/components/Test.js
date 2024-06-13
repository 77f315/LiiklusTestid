import React from "react";
import './css/Test.css';

function Test() {
    return (
        <>
            <nav className="topbar">
                {}
            </nav>
            <nav className="navbar">
                {}
            </nav>
            <main>
                <h1>Test 1</h1>
                <div className="questions">
                    <div className="question"> 
                        <h2>1. Millised dokumendid peavad autojuhil kaasas olema kontrollijale esitamiseks, kui ei sõideta ainult Eesti piires?</h2>
                        <form>
                            <input type="radio" id="option-a" name="answer" value="a" />
                            <label htmlFor="option-a">a. Tervisetõend</label><br />
                            <input type="radio" id="option-b" name="answer" value="b" />
                            <label htmlFor="option-b">b. Juhiluba või muu juhtimisõigust tõendav dokument</label><br />
                        </form>
                    </div>
                    <div className="question"> 2</div>
                    <div className="question"> 3</div>
                    <div className="question"> 4</div>
                    <div className="question"> 5</div>
                    <div className="question"> 6</div>
                    <div className="question"> 7</div>
                    <div className="question"> 8</div>
                    <div className="question"> 9</div>
                    <div className="question"> 10</div>
                    <div className="question"> 11</div>
                    <div className="question"> 12</div>
                    <div className="question"> 13</div>
                    <div className="question"> 14</div>
                    <div className="question"> 15</div>
                    <div className="question">Results</div>
                </div>
            </main>
        </>
    );
}

export default Test;
