import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import { Header } from '../components'
import { DashboardPage, NotFoundPage } from '../screens'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
