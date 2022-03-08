import ToggleSwitch from "./toggle-switch/ToggleSwitch";
import "./css/app.css";

function App() {
  return (
    <div className="App">
      <ToggleSwitch
        question="Which are the best sports people & teams?"
        answers={[
          ["Liverpool - correct", "Chelsea", "Man Utd"],
          ["Serena Williams - correct", "Naomi Osaka"],
        ]}
      />
      <ToggleSwitch
        question="An animal cell contains..."
        answers={[
          ["Ribosomes -", "Cell wall"],
          ["Partially permeable mebrane", "Impermeable membrane"],
          ["Mitochondria", "Cellulose"],
        ]}
      />
    </div>
  );
}

export default App;
