import React from 'react';
import "../../assets/style/upload.css";

const Upload = () => {
  function handleFileChange(event) {
    event.preventDefault(); // Prevent default form submission
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('http://127.0.0.1:4567/upload_csv', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse response JSON if request successful
        } else {
          throw new Error('Failed to upload file');
        }
      })
      .then(data => {
        // Handle successful response (data contains JSON response from server)
        console.log('Response from server:', data);
        // Redirect user to another page (if needed)
        window.location.href = '/predict/column-choice';
      })
      .catch(error => {
        // Handle error (e.g., show an error message)
        console.error('Error uploading file:', error);
      });
    }
  }

  return (
    <main className={"upload wrap"}>
      <h1>Predict the future</h1>
      <p>Import a .csv dataset and get the best results.</p>
      <form id="importCSV" encType="multipart/form-data" className="custom-file-input">
        <label className="input-btn" htmlFor="fileInput">Upload a file</label>
        <input type="file" id="fileInput" name="file" accept=".csv" onChange={handleFileChange}/>
      </form>
    </main>
  );
};

export default Upload;