// src/App.js
import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ColumnRemover from "./components/ColumnRemover";
import { processExcelFile } from "./utils/excelUtils";
import { containerStyle, inputContainerStyle } from "./styles/styles";

const App = () => {
  const [file, setFile] = useState(null);
  const [indices, setIndices] = useState("");

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleIndexChange = (e) => {
    setIndices(e.target.value);
  };

  const handleProcessFile = () => {
    if (!file) {
      alert("Por favor, envie um arquivo de Excel.");
      return;
    }

    processExcelFile(file, indices)
      .then(() => {
        alert("Arquivo processado com sucesso!");
        // Limpar os campos após o download
        setFile(null);
        setIndices("");
        document.getElementById('file-upload').value = '';  // Limpar o campo de upload de arquivo
      })
      .catch((error) => {
        console.error("Erro ao processar arquivo:", error);
      });
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Processador de Arquivos Excel</h1>
      <div style={inputContainerStyle}>
        <FileUpload handleFileUpload={handleFileUpload} />
        <ColumnRemover
          indices={indices}
          handleIndexChange={handleIndexChange}
          handleProcessFile={handleProcessFile}
        />
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "50px", color: "#555", fontSize: "14px" }}>
        <p>
        © 2024 Desenvolvido por <a href="https://jgcarvalho.vercel.app/" target="_blank" rel="noopener noreferrer">J.G. Carvalho</a>. Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default App;
