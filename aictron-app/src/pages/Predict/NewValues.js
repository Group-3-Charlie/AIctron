import React from 'react';

const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/predict/result";
};

function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      document.getElementById('importCSV').submit();
      window.location.href = "/predict/result";
    }
}


const NewValues = () => {
return (
    <main className={"content-page-center"}>
        <h2>Enter new values or Import CSV</h2>
        <form action="" method="post" onSubmit={handleSubmit}>
            <input type="text" name="input1" placeholder="Input 1"/>
            <input type="text" name="input2" placeholder="Input 2"/>
            <input type="text" name="input3" placeholder="Input 3"/>
            <button type="submit">Submit</button>
        </form>

        <form id="importCSV" action="backend/post-api" method="post" encType="multipart/form-data">
            <input type="file" id="fileInput" name="file" accept=".csv" onChange={handleFileChange}/>
        </form>
    </main>
);
};

export default NewValues;