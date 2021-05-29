import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fashion from './components/layouts/fashion/main';

import Layout from './components/app'

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Fashion} />
            <Route exact path={`${process.env.PUBLIC_URL}/fashion`} component={Fashion} />
          </Layout>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));