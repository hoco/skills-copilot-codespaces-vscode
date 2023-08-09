// Create web server
// 1. Get the express library
const express = require('express');
// 2. Create the server
const app = express();
// 3. Create a route handler
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});