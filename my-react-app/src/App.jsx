import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
const board = [
  null, null, null,
  null, null, null,
  null, null, null
]
function TurnBoard(props) {
  return(
    <header className="turn-board">It's {props.turn}'s turn
    <button className="reset-button">Reset</button>
    
    </header>
  )

}
function Cell(props) {
  return(
    <td className="Game-cell">
      <button className="Game-button" id={props.id} onClick={props.onClick}></button>
      </td>);

}

function Game() {
  const [turn, setTurn] = useState('X');
  const[boardState, setBoardState] = useState(board);
  const[selectedCell, setSelectedCell] = useState(null);
  const rows = ["row-0", "row-1", "row-2"];

  return (

   <div className="App">
    <TurnBoard turn={turn}></TurnBoard>
    
    <table className="Game">


<tbody className="Game-body">

{rows.map((rowId, rowIndex) => (
  <tr className="Game-row" id={`row-${rowIndex}`} key={rowIndex}>
    {[0, 1, 2].map((colIndex) => {
      const cellId = `cell-${rowIndex}${colIndex}`;
      return (
        <Cell 
          key={cellId} 
          id={cellId} 
          onClick={() => {
            console.log(`Clicked row ${rowIndex}, column ${colIndex}`);
          }}
        />
      );
    })}
  </tr>
))}
      </tbody>
      </table>

</div>);


}

export default Game;
