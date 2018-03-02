import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
        <div className = "app-container" >
            <NavBar / >
        </div>
        )
    }
}

export default App;
