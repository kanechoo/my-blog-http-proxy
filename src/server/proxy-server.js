var http = require("http"),
  httpProxy = require("http-proxy");
//
// Create your proxy server and set the target in the options.
//
var proxy = httpProxy
  .createProxyServer({ target: "http://localhost:8888" })
  .listen(8178);
//
// Create target server
//
http
  .createServer(function (req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    proxy.web(req, res, { target: "http://zhuqigong.xyz:8084" });
  })
  .listen(8888);
