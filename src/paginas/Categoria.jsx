import React, { useEffect, useState } from 'react';
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom';
import { buscar } from '../api/api';
import '../assets/css/blog.css';

import ListaCategorias from '../components/ListaCategorias.jsx';
import ListaPosts from '../components/ListaPosts.jsx';
import SubCategoria from './SubCategoria.jsx';

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();

  const [subCategoria, setSubCategoria] = useState([])

  useEffect(() => {
    buscar(`/categorias/${id}`, (categoria) => {
      setSubCategoria(categoria.subcategorias)
    });
  }, [id]);

  return(
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
        <ul className="lista-categorias container flex">
        {subCategoria.map((categoria) => (
          <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={categoria}>
            <Link to={`${url}/${categoria}`}>
              {categoria}
            </Link>
          </li>
        ))}
        </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPosts url={`/posts/?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  )
}

export default Categoria