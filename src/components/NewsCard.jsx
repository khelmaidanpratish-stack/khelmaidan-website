import React from "react";

export default function NewsCard({ article }) {
  return (
    <article className="news-card">
      <a className="news-card__image-link" href={`/article/${article.slug}/`}>
        <img className="news-card__image" src={article.image} alt="" loading="lazy" />
      </a>
      <div className="news-card__content">
        <p className="eyebrow">{article.category}</p>
        <h3><a href={`/article/${article.slug}/`}>{article.title}</a></h3>
        <p className="muted">{article.excerpt}</p>
        <a className="read-more" href={`/article/${article.slug}/`}>Read story <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}
