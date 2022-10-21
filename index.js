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

app.get('/', (req, res) => {
    res.send('my own api');
})


// to check the port are running or not start
app.listen(port, () => {
    console.log(`check: listening on port ${port}`)
})
// to check the port are running or not end