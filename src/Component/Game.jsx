import React, { Component } from 'react'
import Broad from './Broad';
import calculateWinner from './calculateWinner'
class Game extends Component {

    state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber:0,
        xIsNext:true
    }
    handleClick=(i)=> {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if  (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
          history: history.concat([
            {
              squares: squares
            }
          ]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext
        });
      }
      jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0
        });
      }
      onClick=i=>{
          console.log(i);
      }
      
    render() {
        let history=this.state.history;
        let current=history[this.state.stepNumber];
        let winner=calculateWinner(current.squares);
        let moves = history.map((step, move) => {
          const desc = move ?
            'Go to move #' + move :
            'Go to game start';
          return (
            <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
          );
        });
        let status;
        if (winner) {
          status = "Winner: " + winner;
        } else {
          status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
        console.log(winner);
        return (
          <div>
     <div className="game">
          <div className="game-board">
            <Broad
              squares={current.squares}
              onClick={this.handleClick}
            />
          </div>
          <div className="game-info">
            <div className='text-primary'>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
          </div>
          
        )
    }
}

export default Game;
