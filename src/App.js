
import './App.css';
import Game from './Components/Game/Game'

function App() {
  return (
    <div className="App">
      <div className="app-header">
        TIC-TAC-T<span>O</span>E
      </div>
      <div className="game-container">
        <Game />
      </div>
    </div>
  );
}

export default App;
