const http = require ('http');
const port = 3000;

const server = http.createServer((req, res) => {
	res.write('Hello world');
	res.end();
}).listen(port, () => {
	console.log(`Server listening on port ${port}`);
	console.log(port);
});
