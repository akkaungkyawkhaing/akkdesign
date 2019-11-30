import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NotFound from './components/NotFound';
import { Router, Route, browserHistory } from 'react-router';

const Root = () =>
  
<Router history={browserHistory}>
<Route path="/" component={App}>

  {/* Your other routes here */}

  <Route path="" component={NotFound} />
</Route>
</Router>
 

ReactDOM.render(<Root />, document.getElementById('root'));

// index.html inside to App or Class

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
