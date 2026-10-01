import React from 'react';
import { formatPublicationDate, getArticleImage, getFallbackImage } from '../lib/articles.js';

export default function NewsCard({ article }) {
  const image = getArticleImage(article);
  const fallback = getFallbackImage(article.category);
  return <article className="news-card">
    <a className="news-card__image-link" href={`/article/${article.slug}/`}>
      <img className="news-card__image" src={image} alt="" loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallback; }} />
    </a>
    <div className="news-card__content">
      <div className="card-meta"><span>{article.category}</span><time>{formatPublicationDate(article.publishedAt,{month:'short',day:'numeric'})}</time></div>
      <h3><a href={`/article/${article.slug}/`}>{article.title}</a></h3>
      <p className="muted">{article.excerpt}</p>
      <a className="read-more" href={`/article/${article.slug}/`}>Read story <span aria-hidden="true">→</span></a>
    </div>
  </article>;
}
