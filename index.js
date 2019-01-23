const http = require('http');
const fs = require('fs');
const port = 3000;
var data = 'Hello to this great world';

// Handle incoming HTTP requests:
const requestHandler = (request, response) => {
   response.end(`Handling a request on port ${port}.`);
};


// Create a server and pass the requestHandler function
const server = http.createServer(requestHandler);


// Start the server. Listen on port 3000
server.listen(port, (err) => {
   if (err) {
      return console.log(`You have an error: ${err}.`)
   }

   fs.writeFile('hello-world.txt', data, 'utf8', (err) => {
      if (err) throw err;

      console.log('The file was created.')
   });

   console.log(`Server is listening on port: ${port}.`)
});
