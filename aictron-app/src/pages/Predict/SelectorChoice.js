import React from 'react';

const handleSubmit = () => {
    window.location.href = "/predict/new-values";
};

const SelectorChoice = () => {
return (
    <main className={"content-page-center"}>
        <h2>Selector Choice</h2>
        <button className={'input-button'} onClick={handleSubmit}>Next</button>
    </main>
);
};

export default SelectorChoice;