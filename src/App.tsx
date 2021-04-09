import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const { lazy, Suspense } = React;
const DivLayout = lazy(() => import('./pages/layout'));
import 'antd/dist/antd.css'
const App = () =>
  <Router>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/" component={DivLayout} />
        <Redirect to="/home"/>
      </Switch>
    </Suspense>
  </Router>
  export default App