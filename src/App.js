import React, { Component } from 'react'
import './App.css'
import Game from './Component/Game'
 

 class App extends Component {
    render() {
        return (
            <div id='app'  >
                <div className='text-center '>
                <h1 >Tic-Tac-Toe</h1>
                <br/>
                <span className='text-primary'>Developed By: Mr. Muhammad Azharul Islam</span>
                <br/>
                <span className='text-primary'>Junior Software Developer</span>
                </div>
                <hr className='bg-danger'/>
                <br/>
                <Game />
            </div>
        )
    }
}

export default App;
