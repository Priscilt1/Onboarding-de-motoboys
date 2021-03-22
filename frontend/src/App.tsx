import React from "react"
import { Register } from './components/Register'
import { GlobalStyle } from './styles/global'
import { Header } from "./components/Header"
import { Welcome } from "./components/Welcome"
import { Status } from "./components/Status"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/status">
            <Status />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>

      <GlobalStyle />

    </Router>
  )
}