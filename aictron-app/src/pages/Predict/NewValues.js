import React from 'react';
import "../../assets/style/new-values.css";

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
            <p>Enter the values for 1 prediction <strong>or</strong> import a new (pre-filled) .csv file.</p>
            <br/>
            <div className={"content-page-content"}>
                <form action="" method="post" onSubmit={handleSubmit} className={"input-form"}>
                    <input type="text" name="input1" placeholder="Input 1"/>
                    <input type="text" name="input2" placeholder="Input 2"/>
                    <input type="text" name="input3" placeholder="Input 3"/>
                    <button className={"input-button"} type="submit">Submit</button>
                </form>

                <div className={"input-form"}>
                    <p>If you need to get many results at once, import your (pre-filled) .csv file. </p>
                    <form id="importCSV" encType="multipart/form-data" className="custom-file-input">
                        <label htmlFor="fileInput">Choisir un fichier</label>
                        <input type="file" id="fileInput" name="file" accept=".csv" onChange={handleFileChange}/>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default NewValues;