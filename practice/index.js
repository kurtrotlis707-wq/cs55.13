// Import the built-in HTTP module to create a web server
const myhttp = require("http");

// Import the file system module with promises for asynchronous file operations
const fs = require("fs").promises;

// Define the request listener function that handles incoming HTTP requests
const requestListener = function (myrequest, myresponse) {
    // Log the requested URL to the console for debugging
    console.log(myrequest.url);

    // Check if the request is for the root path '/'
    if (myrequest.url === '/') {
        // Read the HTML file asynchronously
        fs.readFile(__dirname + "/page.html")
            .then(
                contents => {
                    // Set the response header to indicate HTML content with UTF-8 encoding
                    myresponse.setHeader("Content-Type", "text/html; charset=UTF-8");

                    // Set the HTTP status code to 200 (OK)
                    myresponse.writeHead(200);

                    // Send the HTML content as the response body
                    myresponse.end(contents);
                });
    } else {
        // For any other URL, read the JSON data file
        fs.readFile(__dirname + "/data.json")
            .then(
                contents => {
                    // Set the response header to indicate JSON content with UTF-8 encoding
                    myresponse.setHeader("Content-Type", "application/json; charset=UTF-8");

                    // Set the HTTP status code to 200 (OK)
                    myresponse.writeHead(200);

                    // Send the JSON content as the response body
                    myresponse.end(contents);
                });
    }
};

// Create an HTTP server instance using the request listener function
let myserver = myhttp.createServer(requestListener);

// Start the server listening on localhost (127.0.0.1) port 8080
myserver.listen(8080, "127.0.0.1");