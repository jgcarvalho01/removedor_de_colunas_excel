// src/components/FileUpload.js
import React from "react";

const FileUpload = ({ handleFileUpload }) => {
  return (
    <div>
      <label htmlFor="file-upload" style={{ fontWeight: 'bold' }}>Envie seu arquivo Excel (.xls ou .xlsx):</label>
      <input
        id="file-upload"
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileUpload}
        style={{ marginTop: '10px', padding: '10px' }}
      />
    </div>
  );
};

export default FileUpload;
