import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { loadUser } from './actions/authActions';

import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>

          <div className='App'>
            <Main></Main>
          </div>

        </BrowserRouter>
      </Provider>
    );

  }
}

export default App;
