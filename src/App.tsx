import ToggleSwitch from "./toggle-switch/ToggleSwitch";
import "./css/app.css";

function App() {
  return (
    <div className="App">
      {/* <h1>this is an app</h1> */}
      <ToggleSwitch
        question="Which are the best sports people & teams?"
        options={[
          ["Liverpool - correct", "Chelsea", "Man Utd"],
          ["Serena Williams - correct", "Naomi Osaka"],
        ]}
      />
      <ToggleSwitch
        question="An animal cell contains..."
        options={[
          ["Ribosomes -", "Cell wall"],
          ["Partially permeable mebrane", "Impermeable membrane"],
          ["Mitochondria", "Cellulose"],
        ]}
      />
    </div>
  );
}

export default App;
