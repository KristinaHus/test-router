import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import reducers from './reducers/main'

import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'

import Home from './containers/Home'

let store = compose(
  autoRehydrate()
)(createStore)(reducers)

persistStore(store)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to="/home">Home</Link>
        </p>
          <div>
            {/*<Route path='/' component={App}/>*/}
            <Route path="/home" component={Home}/>
          </div>
      </div>
    </Provider>

    );
  }
}

export default App;
