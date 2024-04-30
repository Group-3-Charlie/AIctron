import { useCallback } from 'react';

import downloadIcon from '../../assets/icons/download.svg';
import '../../assets/style/result.css';

const ResultFile = () => {
  const api_dev = "http://localhost:4567";
  const api_prod = "http://api.aictron.arnaudmichel.fr";

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
          <button className={'blue-btn'} onClick={handleClick}><img src={downloadIcon} alt="Download icon"/>Download</button>
      </main>
  );
};

export default ResultFile;