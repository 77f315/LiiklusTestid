import React from 'react';

const Results = () => {
    const correct = window.localStorage.getItem('correct');
    const wrong = window.localStorage.getItem('wrong');
    return (
        <div>
            <h1>{Number(correct) + 1 } out of {Number(correct) + 1 +  Number(wrong)}</h1>
        </div>
    );
}

export default Results;