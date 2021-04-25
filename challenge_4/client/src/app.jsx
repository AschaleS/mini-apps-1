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
      moves: []
    })
  }

  getMoves(x, z) {
    const list = this.state.moves.filter((element) => {
      return (element.x === x && element.z === z);
    });
    return list[0];
  }

   addMove(x, z) {
    const { turn } = this.state;
    const nextTurn = turn === 'red' ? "yellow": "red";
    this.setState({ moves: this.state.moves.concat({ x, z, player: turn }), turn: nextTurn});
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

