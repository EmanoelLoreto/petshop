import React from 'react'
import './assets/css/base/base.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home.jsx';
import Sobre from './paginas/Sobre.jsx';
import PageNotFound from './paginas/PageNotFound.jsx';
import Cabecalho from './components/Cabecalho.jsx';
import Post from './paginas/Post.jsx';
import Categoria from './paginas/Categoria.jsx';

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/categoria/:id">
            <Categoria />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
