import { React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { buscar } from '../api/api.js';

export default function ListaPosts({ url }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    buscar(url, setPosts);
  }, [url]);
   
  return (
    <section className="posts container">
      { posts.map((post) => (
        <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`} key={post.id}>
          <article>
            <h3 className="cartao-post__titulo">
              {post.title}
            </h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  )
}