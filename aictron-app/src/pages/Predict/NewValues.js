import React, { useEffect, useState } from 'react';

import uploadIcon from '../../assets/icons/upload.svg';
import "../../assets/style/new-values.css";


const NewValues = () => {
    const [columns, setColumns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Get the column names
    useEffect(() => {
        fetch('http://api.aictron.arnaudmichel.fr/get_columns', { method: 'GET' })
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
        window.location.href = "/predict/result-text";
    };
    
    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            document.getElementById('importCSV').submit();
            window.location.href = "/predict/result-file";
        }
    }

    return (
        <main className={"wrap"}>
            <h1>Predict the future</h1>
            <p>Enter the values for one prediction <strong>or</strong> import a new (pre-filled) .csv file.</p>

            <div id="forms-container">
                <form className={"text-option"} action="" method="post" onSubmit={handleSubmit}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            {columns.map((column, index) => (
                                <div className="input-container" key={index}>
                                    <label>{column}</label>
                                    <input type="text" className={'orange-input'} name={column} placeholder="Enter the value"/>
                                </div>
                            ))}
                        </>
                    )}
                    <button className={"input-btn"} type="submit">Submit</button>
                </form>

                <span className="se-line"></span>

                <div className={"file-option"}>
                    <p>If you need to get many results at once, import your (pre-filled) .csv file. </p>
                    <form id="importCSV" encType="multipart/form-data" className="custom-file-input">
                        <label className="input-btn" htmlFor="fileInput"><img src={uploadIcon} alt="Upload icon"/>Upload a file</label>
                        <input type="file" id="fileInput" name="file" accept=".csv" onChange={handleFileChange}/>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default NewValues;