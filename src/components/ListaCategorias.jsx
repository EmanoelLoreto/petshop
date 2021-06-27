import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { buscar } from '../api/api.js';

import '../assets/css/blog.css'

export default function ListaCategoria() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    buscar('/categorias', setCategorias)
  }, []);

  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria, index) => (
          <Link to={`/categoria/${categoria.id}`} key={index}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
              {categoria.nome}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}