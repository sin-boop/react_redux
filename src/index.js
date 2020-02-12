import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import Main from './Main';
import ToDoApp from './components/ToDoApp'
import * as serviceWorker from './serviceWorker';
import CustomBox from "./CustomBox";
import { Provider } from 'react-redux'
import store from './redux/store'

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/customPhoto" component={CustomBox} />
          <Route exact exac path="/todos" component={ToDoApp} />
        </div>
      </Switch>
    </Router>

  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
