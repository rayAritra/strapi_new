const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/data.json');
const rawPath = path.join(__dirname, 'raw_articles.json');

const currentData = require(dataPath);
const rawArticles = require(rawPath);

const newArticles = rawArticles.map(a => ({
    title: a.title,
    slug: a.slug || a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    description: a.description,
    content: a.content || [],
    blocks: [],
    category: { id: 2 },
    author: { id: 1 },
    cover: null
}));

currentData.articles = newArticles;

fs.writeFileSync(dataPath, JSON.stringify(currentData, null, 2));
console.log('Updated data/data.json with ' + newArticles.length + ' articles.');
