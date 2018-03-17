import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Components from './routes/Components';
import Animation from './routes/Animation';
import Colours from './routes/Colours';
import './styles/styles.css';


class App extends Component {

    render() {
        return (
            <Router>
                <div className="app-container">
                    <NavBar />
                    <Route path="/components" exact component={Components} />
                    <Route path="/animation" exact component={Animation} />
                    <Route path="/colours" exact component={Colours} />
                    <Route path="/" exact component={Colours} />
                </div>    
            </Router>
        )
    }
}

export default App;
