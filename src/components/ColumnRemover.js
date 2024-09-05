// src/components/ColumnRemover.js
import React from "react";

const ColumnRemover = ({ indices, handleIndexChange, handleProcessFile }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <label htmlFor="column-indices" style={{ fontWeight: 'bold' }}>Informe os índices das colunas a serem removidas (ex: 0,1,3):</label>
      <input
        id="column-indices"
        type="text"
        placeholder="Índices das colunas"
        value={indices}
        onChange={handleIndexChange}
        style={{ marginTop: '10px', padding: '10px' }}
      />
      <button
        onClick={handleProcessFile}
        style={{
          margin: '20px 10px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Remover Colunas e Baixar
      </button>
    </div>
  );
};

export default ColumnRemover;
