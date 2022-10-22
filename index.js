const express = require('express');
const app = express();
const port = 5000;

/* 
#cors is a cross origin topic; middle wire 
by default: 
one domain can't access another domain data (for security reason)
to use another domain: 
give permission from server or white listed some website to give use permission
or, open for everyone excess
 */
// here I open for everyone to share excess
const cors = require('cors');
app.use(cors());

//here,me make my own api start
app.get('/', (req, res) => {
    res.send('my own api');
})
const categories = require('./JSON_Data/Categories.json');
app.get('/categories', (req, res) => {
    res.send(categories);
    // console.log(categories);
})

const allNews = require('./JSON_Data/News.json');

app.get('/news', (req, res) => {
    res.send(allNews)
})
app.get('/news/:id', (req, res) => {
    const news = allNews.find(news => news._id === req.params.id);
    res.send(news);
})
app.get('/category/:id', (req, res) => {
    const category_news = allNews.filter(category_news => category_news.category_id === req.params.id);
    if (res.params.id === 8) {
        res.send(allNews)
    }
    else {
        res.send(category_news);
    }
})
//here,me make my own api end


// to check the port are running or not start
app.listen(port, () => {
    console.log(`check: listening on port ${port}`)
})
// to check the port are running or not end