import React from 'react';

const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/predict/new-values";
};

const SelectorChoice = () => {
return (
    <main>
        <h1>Selector Choice</h1>
        <form action="" method="post" onSubmit={handleSubmit}>
            <button type="submit">Next</button>
        </form>
    </main>
);
};

export default SelectorChoice;