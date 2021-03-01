import './App.css';
import Board from './components/Board';
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <h1>Minesweeper</h1>
        <Board/>
      </div>
    </HashRouter>
  );
}

export default App;
