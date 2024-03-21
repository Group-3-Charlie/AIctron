import React from 'react';

const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/predict/selector-choice";
};

const ColumnChoice = () => {
return (
    <main className={"content-page-center"}>
        <h2>Column Choice</h2>
        <form action="" method="post" onSubmit={handleSubmit}>
            <button type="submit">Next</button>
        </form>
    </main>
);
};

export default ColumnChoice;