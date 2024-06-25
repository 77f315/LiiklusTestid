import React, { useState, useRef } from "react";
import "./css/question.css";
import questions from "./data";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Map());

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionArray = [Option1, Option2, Option3, Option4];

  
  const checkAns = (e, ans) => {
    if (!lock) {
      const isCorrect = questions[index].ans === ans;
      setAnsweredQuestions((prev) => new Map(prev).set(index, { selected: ans, correct: isCorrect }));

      if (isCorrect) {
        e.target.classList.add("correct");
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
        if (optionArray[questions[index].ans - 1].current) {
          optionArray[questions[index].ans - 1].current.classList.add("correct");
        }
        setWrong(wrong + 1);
      }
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      resetOptions();
      checkLock(index + 1);
    }
  };

  const previousQuestion = () => {
    if (index > 0) {
      setIndex(index - 1);
      resetOptions();
      checkLock(index - 1);
    }
  };

  const resetOptions = () => {
    optionArray.forEach((option) => {
      if (option.current) {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      }
    });
  };

  const checkLock = (questionIndex) => {
    const answered = answeredQuestions.get(questionIndex);
    if (answered) {
      setLock(true);
      if (optionArray[answered.selected - 1].current) {
        optionArray[answered.selected - 1].current.classList.add(answered.correct ? "correct" : "wrong");
      }
      if (!answered.correct && optionArray[questions[questionIndex].ans - 1].current) {
        optionArray[questions[questionIndex].ans - 1].current.classList.add("correct");
      }
    } else {
      setLock(false);
    }
  };

  const question = questions[index];
  
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/results')
  }
  const handleReset = () =>{
    setAnsweredQuestions(new Map());
    resetOptions();
    setScore(0);
    setWrong(0);
    setIndex(0);
    setLock(false);
  }
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
        {index < questions.length - 1 && <button onClick={nextQuestion}>Järgmine küsimus</button>}
        {index === questions.length - 1 && <button onClick={handleSubmit}> Submit</button>}
      </div>
      <div className="index">
        <div>
          Question {question.id} of {questions.length}
        </div>
        <div>
          {score} out of {score + wrong}
        </div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
