import { getCollection } from 'astro:content';

const fallbackImages = {
  Football: '/images/football-placeholder.svg',
  Cricket: '/images/cricket-placeholder.svg',
  Volleyball: '/images/volleyball-placeholder.svg',
  Extras: '/images/football-placeholder.svg',
};

export function getFallbackImage(category) {
  return fallbackImages[category] || fallbackImages.Extras;
}

export function getArticleImage(article) {
  return article.image?.trim() || getFallbackImage(article.category);
}

export function formatPublicationDate(value, options = {}) {
  // Treat the YYYY-MM-DD portion as an editorial calendar date. This prevents
  // a midnight UTC conversion from displaying the previous day in Toronto.
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return value;
  const [, year, month, day] = match;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'UTC', ...options }).format(date);
}

export async function getArticles() {
  const entries = await getCollection('articles');
  return entries
    .map((entry) => ({ slug: entry.id, ...entry.data, entry }))
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}
