import React from 'react';
import * as XLSX from 'xlsx';

const ExportToExcel = ({ jsonData, fileName }) => {
  const exportToExcel = () => {
    /* convert JSON to worksheet */
    const worksheet = XLSX.utils.json_to_sheet(jsonData);

    /* create workbook and add worksheet */
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    /* save to file */
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <button onClick={exportToExcel} className = "btn btn-secondary">
      Export to Excel
    </button>
  );
};

export default ExportToExcel;
