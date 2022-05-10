const express = require('express');
const app = express();

// --------- Code from express docs. Moved to index.js
// const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello!');
});

// --------- Code from express docs. Moved to index.js
// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`);
// });

module.exports = app;
