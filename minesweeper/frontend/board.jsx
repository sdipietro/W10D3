import * as Minesweeper from '../minesweeper';
import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = this.props.board.grid.map((row, idx)=> {
        const rowEl = row.map((tile, idx2) => {
          return (
            <Tile key={idx2} updateGame={this.props.updateGame} tile={tile}/>
          )
        });
        return (
          <div className="row" key={idx}>
            {rowEl}
          </div>
        )
    })
    return(
      <div className="board">
        {rows}
      </div>
    )
  }
}

export default Board;