import React from 'react';

import doguito404 from '../assets/img/doguito404.svg';
import '../assets/css/404.css';

export default function PageNotFound() {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img
        className="doguito-imagem"
        src={doguito404}
        alt="Page not found"
      />
      <p className="naoencontrado-texto">Ops, está pagina não existe!</p>
    </main>
  )
}