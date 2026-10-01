# Publishing a KhelMaidan article

Articles live in `src/content/articles/`. Create one Markdown (`.md`) file per story.

## 1. Create the file

Use a short URL-friendly filename, for example:

`src/content/articles/nepal-football-final.md`

## 2. Paste this template

```md
---
title: "Your headline"
category: "Football"
publishedAt: "2026-10-01T12:00:00-04:00"
excerpt: "One or two sentences summarizing the story."
image: "/images/your-photo.jpg"
author: "KhelMaidan"
featured: false
---

Write the opening paragraph here.

## A subheading if you need one

Continue the article here. Markdown supports **bold text**, *italics*, links, lists, and headings.
```

Allowed categories are `Football`, `Cricket`, `Volleyball`, and `Extras`.

## 3. Add the image

Put the image in `public/images/`, then use `/images/filename.jpg` in the article frontmatter.

## 4. Test and publish

Run `npm run dev`, check the homepage, category page, and full article. When everything looks right:

```bash
git add .
git commit -m "Publish article: short headline"
git push
```

Cloudflare will deploy the new article automatically after the GitHub push succeeds.
