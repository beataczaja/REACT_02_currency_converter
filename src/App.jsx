import "./App.css";
import Nav from "./Nav";
import SelectList from "./SelectList";

function App() {
  return (
    <div className="App">
      <div className="bd">
        <div className="bg">
          <Nav></Nav>
          <SelectList></SelectList>
        </div>
      </div>
    </div>
  );
}

export default App;
