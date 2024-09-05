// src/utils/excelUtils.js
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const processExcelFile = (file, indices) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      let jsonSheet = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const indexArray = indices.split(",").map(Number);

      // Remover colunas
      const modifiedSheet = jsonSheet.map((row) =>
        row.filter((_, colIndex) => !indexArray.includes(colIndex))
      );

      // Criar nova planilha com colunas removidas
      const newWorksheet = XLSX.utils.aoa_to_sheet(modifiedSheet);
      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Modificado");

      const excelBuffer = XLSX.write(newWorkbook, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
      saveAs(blob, "arquivo_modificado.xlsx");

      resolve();
    };

    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};
