const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url).pathname
    if (req.method == "GET") {
        if (reqUrl == "/") {
            res.write("This Is A Simple Get Route")
            res.end()
        }
        else if (reqUrl == "/hello") {
            res.write("Hello From NodeJS")
            res.end()
        }
    }
})
server.listen(3030)