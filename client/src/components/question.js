import React, { useState, useRef } from "react";
import "./css/question.css";
import questions from "./data";

const Question = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (questions[index].ans === ans) {
        e.target.classList.add("correct");
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
        option_array[questions[index].ans - 1].current.classList.add("correct");
        setWrong(wrong + 1);
      }
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setLock(false);
      option_array.forEach((option) => {
        if (option.current) {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
        }
      });
    }
  };

  const previousQuestion = () => {
    if (index > 0) {
      setIndex(index - 1);
      setLock(false);
      option_array.forEach((option) => {
        if (option.current) {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
        }
      });
    }
  };

  const question = questions[index];

  return (
    <div className="container">
      <h1>Test</h1>
      <hr />
      <h2>
        {question.id}. {question.question}
      </h2>
      <ul>
        {question.options[0] && (
          <li
            ref={Option1}
            onClick={(e) => {
              checkAns(e, 1);
            }}
          >
            {question.options[0].text}
          </li>
        )}
        {question.options[1] && (
          <li
            ref={Option2}
            onClick={(e) => {
              checkAns(e, 2);
            }}
          >
            {question.options[1].text}
          </li>
        )}
        {question.options[2] && (
          <li
            ref={Option3}
            onClick={(e) => {
              checkAns(e, 3);
            }}
          >
            {question.options[2].text}
          </li>
        )}
        {question.options[3] && (
          <li
            ref={Option4}
            onClick={(e) => {
              checkAns(e, 4);
            }}
          >
            {question.options[3].text}
          </li>
        )}
      </ul>
      <div className="question-container">
        <button onClick={previousQuestion}>Eelmine küsimus</button>
        <button onClick={nextQuestion}>Järgmine küsimus</button>
      </div>
      <div className="index">
        <div>
          Question {question.id} of {questions.length}
        </div>
        <div>
          {score} out of {score + wrong}
        </div>
      </div>
    </div>
  );
};

export default Question;
