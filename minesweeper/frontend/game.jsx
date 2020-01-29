import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        board: new Minesweeper.Board(9, 10)
      }
      this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagging) {
      if (flagging) {
        tile.toggleFlag();
      } else {
        tile.explore();
      }
      this.setState( {board: this.state.board});
    }

    render() {
      let board = this.state.board;
      let updateGame = this.updateGame;
      let lost = ""
      let won = ""
      if (this.state.board.lost()) {
        lost = "You lose. Try again."
        // alert("You lose. Try again, idiot.")
      }; 
      if (this.state.board.won()) {
        won = "Congrats! You win."
      }
      
      return (
        <>
          <h1>Play Minesweeper!</h1>
          <h4>Click to explore a tile.</h4>
          <h4>Alt + Click to flag a tile.</h4>
          <div className="game">
            <Board board={board} updateGame={updateGame}/>
          </div>
          <p>{lost}</p>
          <p>{won}</p>
        </>
      )
    }
}