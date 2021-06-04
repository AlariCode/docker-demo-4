const express = require('express')
const { writeFileSync, readFileSync } = require('fs');
const fse = require('fs-extra')

const app = express()
const port = 3000
app.get('/set', async (request, response) => {
	await fse.ensureDir('data');
	writeFileSync('./data/req', request.query.id);
	response.send('done!');
})
app.get('/get', (request, response) => {
	const res = readFileSync('./data/req');
	response.send(res.toString());
})
app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
})