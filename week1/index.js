// Import the built-in HTTP module to create a web server
let myhttp = require("http");

// Create an HTTP server with a request handler function
let myserver = myhttp.createServer(
    // Request handler function that processes incoming HTTP requests
    function (myrequest, myresponse) {
        // Log the requested URL to the console for debugging purposes
        console.log(myrequest.url);

        // Initialize variable to store response text
        let mytext; {

            // Check if the request URL is '/hey'
            if (myrequest.url === '/hey') {
                // Set response text for the '/hey' route
                mytext = "hello there";
            } else {
                // Set default response text for all other routes
                mytext = "Nope";
            }
        }
        {

            if (myrequest.url === '/yes') {
                // Set response text for the '/hey' route
                mytext = "yes";
            } else {
                // Set default response text for all other routes
                mytext = "Nope";
            }
        }

        {

            if (myrequest.url === '/no') {
                // Set response text for the '/hey' route
                mytext = "no";
            } else {
                // Set default response text for all other routes
                mytext = "Nope";
            }
        }

        // Set HTTP response headers
        // 200 = OK status code, Content-Type specifies plain text response
        myresponse.writeHead(200, { "Content-Type": "text/plain" });

        // Send the response text and end the response
        myresponse.end(mytext + "\n");
    }
);

// Start the server listening on localhost (127.0.0.1) port 8080
myserver.listen(8080, "127.0.0.1");