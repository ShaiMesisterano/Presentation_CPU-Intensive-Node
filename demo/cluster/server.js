const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for (let i=0; i<10000000; i++); // simulate CPU work
  res.end(`Handled by process ${pid}`);
}).listen(8000, () => {
  console.log(`Started process ${pid}`);
});

// ab -c200 -t10 http://localhost:8000/