import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";

export default function App() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function init() {
      try {
        const URL =
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        const filteredData = data.map((list) => ({
          "s.no": list["s.no"],
          "percentage.funded": list["percentage.funded"],
          "amt.pledged": list["amt.pledged"],
        }));
        console.log("filteredData:", filteredData);
        setTableData(filteredData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const columns = [
    { key: "s.no", label: "S.No." },
    { key: "percentage.funded", label: "Percentage funded" },
    { key: "amt.pledged", label: "Amount pledged" },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>React Table Component</h1>
      <Table columns={columns} data={tableData} />
    </div>
  );
}
