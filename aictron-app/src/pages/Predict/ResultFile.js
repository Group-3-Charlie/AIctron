import React from 'react';
import {Link} from "react-router-dom";

import downloadIcon from '../../assets/icons/download.svg';
import '../../assets/style/result.css';

const ResultText = () => {
  return (
      <main id="result" className={"wrap"}>
          <h1>Result ✨</h1>
          <p>Download the predictions and see the future... Thanks for using AIctron !</p>
          <Link className={'input-btn'}><img src={downloadIcon} alt="Download icon"/>Download</Link>
      </main>
  );
};

export default ResultText;