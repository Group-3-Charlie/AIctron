import React, { useEffect, useState } from 'react';

const ColumnChoice = () => {
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:4567/get_columns', { method: 'GET' })
      .then((response) => response.json())
      .then((columnData) => {
        // Set the const columns with response data
        setColumns(columnData.columns);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error when trying to get the columns through API:', error);
        setIsLoading(false);
      });
  }, []); // Empty array as second argument means this effect runs once on component mount

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/predict/selector-choice';
  };

  return (
    <main className={'content-page-center'}>
      <h2>Column Choice</h2>
      {isLoading ? (
        <p>Loading columns...</p>
      ) : (
        <ul>
          {columns.map((column, index) => (
            <li key={index}>{column}</li>
          ))}
        </ul>
      )}

      <form action="" method="post" onSubmit={handleSubmit}>
        <button className={'input-button'} type="submit">Next</button>
      </form>
    </main>
  );
};

export default ColumnChoice;