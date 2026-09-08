import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function TurnBoard() {
  return(
    <header className="turn-board">It's X's turn
    <button className="reset-button">Reset</button>
    
    </header>
  )

}

function Game() {
  

  return (

   <div className="App">
    <TurnBoard></TurnBoard>
    
    <table className="Game">


<tbody className="Game-body">
        <tr className="Game-row">
          <td className="Game-cell"><button className="Game-button">
            </button>
            </td>
          <td className="Game-cell">
          <button className="Game-button">
            </button>
          </td>
          <td className="Game-cell">
          <button className="Game-button">
            </button>
          </td>
        </tr>
        <tr className="Game-row">
          <td className="Game-cell">
          <button className="Game-button">
            </button>
          </td>
          <td className="Game-cell">
          <button className="Game-button">
            </button>
          </td>
          <td className="Game-cell">
          <button className="Game-button">
            </button>
          </td>
        </tr>
        <tr className="Game-row">
          <td className="Game-cell">
          <button className="Game-button">
            </button>
          </td>
          <td className="Game-cell">
          <button className="Game-button">
            </button>
          </td>
          <td className="Game-cell">
          <button className="Game-button">
            </button>
          </td>
        </tr>
      </tbody>
      </table>

</div>

   
); 


}

export default Game;
