import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './screens/Layout';

import 'bootstrap/dist/css/bootstrap.css';
import { RulesProvider } from './RulesProvider';

ReactDOM.render(
  <RulesProvider>
    <Router>
      <Route path="/" component={Layout} />
    </Router>
  </RulesProvider >,
  document.getElementById('root')
);
