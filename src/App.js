import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeUser from './components/HomeUser';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeUser} />
        </div>
      </Router>
    );
  }
}

export default App;
