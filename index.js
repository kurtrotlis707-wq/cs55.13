let myhttp = require("http");

let myserver = myhttp.createServer(

    function (myrequest, myresponce) {
        console.log(myrequest.url);

        let mytext;
        if (myrequest.url === '/hey') {
            mytext = "hello there";
        } else {
            mytext = "Nope";
        }

        myresponse.writeHead(200, { "Content-Type": "text/plain" });

        myresponce.end(mytext + "\n");
    }
);

myserver.listen(8080, "127.0.0.1");
