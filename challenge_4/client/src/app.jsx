import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 6,
      cols: 7,
      moves: [],
      turn: 'red'
    };
  }
  resetBoard() {
    this.setState({
      moves: [],
      turn: 'red'
    })
  }

  getMoves(x, y) {
    const list = this.state.moves.filter((element) => {
      const result = (element.x === x && element.y === y);
      return result;
    });
    return list[0];
  }

  addMove(x, y) {
    const { turn } = this.state;
    const nextTurn = turn === 'red' ? "yellow" : "red";
    this.setState({ moves: this.state.moves.concat({ x, y, player: turn }), turn: nextTurn }, function () {
      const message = this.checkWhoWins(x, y, turn);
      alert(message);
    }.bind(this))

  }


 checkWhoWins(x, y, player){
    let xInRow = 1;
    for(let column = x + 1; column < x + 4 && column < 7; column +=1){
      const checkMove = this.getMoves(column, y);
      if(checkMove && checkMove.player === player) {
        xInRow +=1;
      } else {
        break;
      }
    }
    for(let column = x - 1; column > x - 4; column -=1){
      const checkMove = this.getMoves(column, y);
      if(checkMove && checkMove.player === player) {
        xInRow +=1;
      } else {
        break;
      }
    }

    if(xInRow === 4){
      this.setState({winner: player})
      return "Player: " + player + " wins the game!";
    }

    xInRow = 1;
    for(let row = y + 1; row < y + 4; row +=1){
      const checkMove = this.getMoves(x, row);
      if(checkMove && checkMove.player === player) {
        xInRow +=1;
      } else {
        break;
      }
    }
    for(let row = y - 1; row > y - 4; row -=1){
      const checkMove = this.getMoves(x, row);
      if(checkMove && checkMove.player === player) {
        xInRow +=1;
      } else {
        break;
      }
    }

    if(xInRow === 4){
      this.setState({winner: player})
      return "Player: " + player + " wins the game!";
    }

    xInRow = 1;
    for(let row = y+1, column = x+1; row < 6 && column < 7; row++, column++) {
      const checkMove = this.getMoves(column, row);
      // if(checkMove) {
      //   console.log(column, row, player, checkMove.player);
      // } else {
      //   console.log(column, row, checkMove);
      // }
      if(checkMove && checkMove.player === player) {
        xInRow += 1;
      } else {
        break;
      }
    }

    for(let row = y-1, column = x-1; row >= 0 && column >= 0; row--, column--) {
      const checkMove = this.getMoves(column, row);
      if(checkMove && checkMove.player === player) {
        xInRow += 1;
      } else {
        break;
      }
    }
    if(xInRow === 4){
      this.setState({winner: player})
      return "Player: " + player + " wins the game!";
    }

    xInRow = 1;
    for(let row = y+1, column = x-1; row < 6 && column >= 0; row++, column--) {
      const checkMove = this.getMoves(column, row);
      if(checkMove && checkMove.player === player) {
        xInRow += 1;
      } else {
        break;
      }
    }

    for(let row = y-1, column = x+1; row >= 0 && column < 7; row--, column++) {
      const checkMove = this.getMoves(column, row);
      if(checkMove && checkMove.player === player) {
        xInRow += 1;
      } else {
        break;
      }
    }

    if(xInRow === 4){
      this.setState({winner: player})
      return "Player: " + player + " wins the game!";
    }

    if(this.state.moves.length === 42){
      this.setState({winner: 'tie'});
      return "This is a tie!";
    }

  }

  renderBoard() {
    const { rows, cols } = this.state;
    const rowViews = [];
    for (let row = 0; row < this.state.rows; row++) {
      const colViews = [];
      for (let col = 0; col < this.state.cols; col++) {
        const move = this.getMoves(col, row);
        colViews.push(
          <div onClick={() => { this.addMove(col, row) }}  style={{ width: 50, height: 50, backgroundColor: "#0062ff", display: "flex"}}>
            <div style={{ borderRadius: "50%", backgroundColor: "white", flex: 1, display: "flex" }}>
            {move ? <div style={{ backgroundColor: move.player, flex: 1, borderRadius: "50%" }} /> : undefined}
            </div>
          </div>
        );
      }
      rowViews.push(
        <div style={{ display: "flex", flexDirection: "row" }}>{colViews}</div>
      );
    }
    return (
      <div>
        {rowViews}
      </div>
    )
  }
  render() {
    return (
      <div style={{ margin: "auto", width: "25%", padding: "20px"}}>
        <h2> Connect Four</h2>
        <div style={{ padding: 5, display: "flex"}}>
          {this.renderBoard()}
        </div>
        <button onClick={() => { this.resetBoard() }} >Reset</button>
      </div>

    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;

