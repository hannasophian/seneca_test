import ToggleSwitch from "./ToggleSwitch";

function App() {
  return (
    <div className="App">
      <h1>this is an app</h1>
      <ToggleSwitch
        question="Which are the best sports people & teams?"
        options={[
          ["Liverpool - correct", "Chelsea", "Man Utd"],
          ["Serena Williams - correct", "Naomi Osaka"],
        ]}
      />
    </div>
  );
}

export default App;
