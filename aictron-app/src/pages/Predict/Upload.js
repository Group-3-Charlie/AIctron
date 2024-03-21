import React from 'react';


import "./css/Upload.css";
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

const Upload = () => {
  return (
    <main className={"content-page-center upload"}>
      <h2>Predict the Future</h2>
      <p>Import a .csv dataset and get the best results.</p>
      <form id="importCSV" encType="multipart/form-data" className="custom-file-input">
        <label htmlFor="fileInput">Choisir un fichier</label>
        <input type="file" id="fileInput" name="file" accept=".csv" onChange={handleFileChange}/>
      </form>
    </main>
  );
};

export default Upload;