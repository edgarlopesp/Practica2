var http=require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(request, reponse){
    console.log('request', request.url);
    var filePath ='.'+ request.url;
    if(filePath=='./'){
        filePath= './index.html';
            }

var extname = String(path.extname(filePath)).toLowerCase();
var contentType = 'text/html';
var mimeTypes= {
    '.html':'text/html',
    '.js':'text/javascript',
    'css':'text/css',
    '.json':'application/json',
    '.png':'imagen/png',
    '.jpg':'imagen/jpg',
    '.gif':'imagen/gif',
    '.wav':'audio/wav',
    '.mp4':'video/mp4',
    'woff':'application/font-woff',
    'ttf':'application/font-ttf',
    'eot':'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg':'application/image/svg+xml'
};
contentType = mimeTypes[extname]|| 'application/octet-stream';
fs.readFile(filePath, function(error, content){
    if(error){
        if(error.code=='ENOENT'){
            fs.readFile('./404.html',function(error, content){
                response.writeHead(200,{'Content-Type':contentType});
                response.end(content,'utf-8');
            });
        }else{
            reponse.writeHead(500);
            reponse.end('Sorry, Chect with the site admin'+error.code+'..\n');
            response.end();
        }
    }else{
        reponse.writeHead(200,{'Content-Type': contentType});
        response.end(content,'utf-8');
    } 
});
}).listen(3000);
console.log('Server running at http:127.0.0.1:3000/');
