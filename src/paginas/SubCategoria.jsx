import React from 'react';
import { useParams } from 'react-router-dom';

import ListaPosts from '../components/ListaPosts.jsx';

export default function SubCategoria() {
  const { subcategoria } = useParams();
  return (
    <ListaPosts url={`/posts/?subcategoria=${subcategoria}`} />
    
  )
}