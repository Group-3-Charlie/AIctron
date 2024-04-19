import React from 'react';
import '../../assets/style/result.css';

const ResultText = () => {
  const selected_column = "column_name";
  const prediction = "prediction";

  return (
      <main id="result" className={"wrap"}>
          <h1>Result ✨</h1>
          <p>The prediction for the column <span>{selected_column}</span> is : <span>{prediction}</span></p>
      </main>
  );
};

export default ResultText;