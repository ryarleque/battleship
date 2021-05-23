import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ConfigurationComponent from './components/Configuration/Configuration';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderComponent from './components/Header/Header';
import DasboardComponent from './components/Dashboard/Dashboard';

import { Provider } from 'react-redux'
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <div>           
      <Router>
      <HeaderComponent/>
        <div>
          <Route path="/" exact component={DasboardComponent} />        
          <Route path="/configuration" component={ConfigurationComponent} />
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);