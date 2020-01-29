import React from 'react';
import ReactDOM from 'react-dom';

// import Board from './board';
import Game from './game';
// import Tile from './tile';

function Root() {
  return(
    <div className="page">
      <Game/>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});

