import React, { useEffect, useState } from 'react';
import "../../assets/style/column-choice.css";

const ColumnChoice = () => {
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(-1);
  const [selectedColumnText, setSelectedColumnText] = useState('');

  const handleClick = (index, text) => {
    setSelectedColumnIndex(index);
    setSelectedColumnText(text);
  };

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

  const handleSubmit = () => {
    if (selectedColumnIndex !== -1) {
        useEffect(() => {
            fetch('http://127.0.0.1:4567/send_chosen_column', {
                method: 'POST',
                body: selectedColumnIndex,
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); 
                } else {
                    throw new Error('Failed to send the chosen column');
                }
            })
            .then(data => {
                // Handle successful response (data contains JSON response from server)
                console.log('Response from server:', data);
                // Redirect user to another page (if needed)
                window.location.href = '/predict/selector-choice';
            })
            .catch(error => {
                // Handle error (e.g., show an error message)
                console.error('Error when trying to send the chosen column:', error);
            });
        });
    }
  };

  return (
    <main className={'content-page-center'}>
      <h2>Column Choice</h2>
      {isLoading ? (
        <p>Loading columns...</p>
      ) : (
        <>
            <p>Choose the values's column you want to predict.</p>
            <div id="columns-container">
            {columns.map((column, index) => (
                <button className={selectedColumnIndex === index ? 'orange-btn selected' : 'orange-btn'} key={index} onClick={() => handleClick(index, column)} >{column}</button>
            ))}
            </div>
        </>
      )}

        <button className={(selectedColumnIndex !== -1) ? 'input-button' : 'input-button disabled'} onClick={handleSubmit}>Next</button>
    </main>
  );
};

export default ColumnChoice;