const express = require('express')
const { writeFileSync, readFileSync } = require('fs');

const app = express()
const port = 3000
app.get('/set', (request, response) => {
	writeFileSync('data', request.query.id);
	response.send('done!');
})
app.get('/get', (request, response) => {
	const res = readFileSync('data');
	response.send(res.toString());
})
app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
})