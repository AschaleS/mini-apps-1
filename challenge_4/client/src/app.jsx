import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 6,
      cols: 7
    };
  }

  renderBoard() {
    const { rows, cols } = this.state;
    const rowViews = [];
    for (let row = 0; row < this.state.rows; row++) {
      const colViews = [];
      for (let col = 0; col < this.state.cols; col++) {
        colViews.push(
          <div style={{ width: 50, height: 50, backgroundColor: "white", border: "1px solid black" }}></div>
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
      <div>
        <h2> Connect Four</h2>
        <div>
          {this.renderBoard()}
        </div>
        <button>Reset</button>
      </div>

    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));

