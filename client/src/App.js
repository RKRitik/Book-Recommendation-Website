import React, { Component } from 'react';
//import { Provider } from 'react-redux';
//import { ConfigureStore } from './Redux/configureStore';

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
class App extends Component {

  render() {
    //const store = ConfigureStore();
    return (
      //<Provider store={store}>
      <BrowserRouter>

        <div className='App'>
          <Main></Main>
        </div>

      </BrowserRouter>
      //</Provider>
    );

  }
}

export default App;
