import ToggleSwitch from "./ToggleSwitch";

function App() {
  return (
    <div className="App">
      <h1>this is an app</h1>
      <ToggleSwitch
        question="Which are the best sports people & teams?"
        options={[
          ["Liverpool", "Chelsea", "Man Utd"],
          ["Serena Williams", "Naomi Osaka"],
        ]}
      />
    </div>
  );
}

export default App;
