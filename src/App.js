import logo from "./img/logo.png";
import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}

export default App;
