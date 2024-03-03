import * as http from 'http';
import * as fs from 'fs';

http.createServer(function (request, response) {
    console.log(request.url)
    switch (request.url) {
        case "/404/404.js":
            fs.readFile("./404.js", function (error, content) {
                response.writeHead(200, { 'Content-Type': "text/javascript" });
                response.end(content, 'utf-8');
            });        
            break;

        case "/404/404.css":
            fs.readFile("./404.css", function (error, content) {
                response.writeHead(200, { 'Content-Type': "text/css" });
                response.end(content, 'utf-8');
            });        
            break;
    
        default:
            fs.readFile("./404.html", function (error, content) {
                response.writeHead(200, { 'Content-Type': "text/html" });
                response.end(content, 'utf-8');
            });        
            break;
    }
}).listen(4040)