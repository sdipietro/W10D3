import * as Minesweeper from '../minesweeper';
import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props); 
    // debugger
    // this.state = {
    //   tile: new Minesweeper.Tile(this.props.board, this.props.tile)
    // }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    // debugger
    this.props.updateGame(this.props.tile, event.altKey)
  }

  

  render() {
    let status = "unexplored";
    let label;
   
      // debugger

      if (this.props.tile.explored) {
        if (this.props.tile.bombed) {
          status = "bombed"
          // label = '\u{1F4A3}';
        } else if (this.props.tile.adjacentBombCount() > 0) {
          // debugger
          status = "explored"
          label = this.props.tile.adjacentBombCount();
        } else {
          // debugger
          status = "explored"
          label = "  ";
      // } else if (this.props.tile.bombed) {
      //   status = "bombed"
      //   label = "b";
        }
      } else if (this.props.tile.flagged) {
        status = "flagged"
        // label = '\u{2691}';
      };
    
 

    return (
      <div className={`tile ${status}`} onClick={this.handleClick}>
        {label}
      </div>
    )

  }
}

export default Tile;