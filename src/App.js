import "./App.css";
import { ExportXlsx } from "./ExportXlsx/ExportXlsx";

function App() {
  const fileName = "Restore_data";
  const viewers = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
  ];

  return (
    <div className="App">
      <ExportXlsx csvData={viewers} fileName={fileName} />
    </div>
  );
}

export default App;
