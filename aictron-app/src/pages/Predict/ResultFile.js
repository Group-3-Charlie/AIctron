import React, { useCallback, useState, useEffect } from 'react';
import Papa from 'papaparse';

import downloadIcon from '../../assets/icons/download.svg';
import '../../assets/style/result.css';

const ResultFile = () => {
  const api_dev = "http://localhost:4567";
  const api_prod = "http://api.aictron.arnaudmichel.fr";

  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch((api_dev + '/get_predictions'), { method: 'GET' })
      .then((response) => response.blob())
      .then((blob) => {
        Papa.parse(blob, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            const rowsArray = [];
            const valuesArray = [];

            // Iterating data to get column name and their values
            results.data.map((d) => {
              rowsArray.push(Object.keys(d));
              valuesArray.push(Object.values(d));
            });

            setTableRows(rowsArray[0]);
            setValues(valuesArray);
          },
        });
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  }, []);

  const handleClick = useCallback(async () => {
    try {
      const response = await fetch((api_dev + '/get_predictions'), { method: 'GET' });
      const blob = await response.blob();

      // Create a temporary link element and set the href to the file URL
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'predictions.csv';

      // Dispatch a click event on the link to start the download
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

      // Remove the link element from the DOM after the download has finished
      URL.revokeObjectURL(link.href);

      link.remove();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }, []);
  

  return (
      <main id="result" className={"wrap"}>
          <h1>Result ✨</h1>
          <p>Download the predictions and see the future... Thanks for using AIctron !</p>
          
          {/* CSV Preview */}
          <div id="preview">
            <table>
              <thead>
                <tr>
                  {tableRows.map((rows, index) => {
                    return <th key={index}>{rows}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {values.map((value, index) => {
                  return (
                    <tr key={index}>
                      {value.map((val, i) => {
                        return <td key={i}>{val}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <button className={'blue-btn'} onClick={handleClick}><img src={downloadIcon} alt="Download icon"/>Download</button>
      </main>
  );
};

export default ResultFile;