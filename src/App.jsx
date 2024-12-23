import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";

export default function App() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    async function init() {
      const URL =
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
      const res = await fetch(URL);
      const data = await res.json();
      const filteredData = data.map((list) => ({
        "s.no": list["s.no"],
        "percentage.funded": list["percentage.funded"],
        "amt.pledged": list["amt.pledged"],
      }));
      console.log("filteredData:", filteredData);
      setTableData(filteredData);
    }
    init();
  }, []);
  const columns = [
    { key: "s.no", label: "S.No." },
    { key: "percentage.funded", label: "Percentage funded" },
    { key: "amt.pledged", label: "Amount pledged" },
  ];

  const handleRowClick = (row) => {
    alert(`You clicked on ${row}`);
  };

  return (
    <div>
      <h1>React Table Component</h1>
      <Table columns={columns} data={tableData} onRowClick={handleRowClick} />
    </div>
  );
}
