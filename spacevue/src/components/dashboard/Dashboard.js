import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Chart from "../charts/Chart.js";

import "./dashboard.css";

function Dashboard() {
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.ag-grid.com/example-assets/space-mission-data.json"
    ).then((res) =>
      res.json().then((data) => {
        setRowData(data);
        const columns = Object.keys(data[0]).map((column) => {
          return { field: column };
        });
        setColDefs(columns);
      })
    );
  }, [rowData, colDefs]);

  const gridOptions = {
    pagination: true,
    paginationPageSize: 500,
    paginationPageSizeSelector: [200, 500, 1000],
  };

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <Chart data={rowData} />
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        gridOptions={gridOptions}
      />
    </div>
  );
}

export default Dashboard;
