import React from 'react';

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById('importCSV').submit();
    window.location.href = '/predict/column-choice';
  }
}

const Upload = () => {
  return (
    <main>
      <h1>Upload Page</h1>
      <form id="importCSV" action="backend/post-api" method="post" encType="multipart/form-data">
        <input type="file" id="fileInput" name="file" accept=".csv" onChange={handleFileChange} />
      </form>
    </main>
  );
};

export default Upload;