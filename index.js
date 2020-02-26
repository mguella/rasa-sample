const express = require('express')
const app = express()
const proxy = require('http-proxy-middleware').createProxyMiddleware;

const port = process.env.PORT || 3000;


app.use((req, res, next) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && ['staging', 'production'].indexOf(process.env.NODE_ENV) >= 0) {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();    
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

const API_PROXY = 'http://localhost:5005/webhooks/rest';
app.use('/webhook', proxy({ target: API_PROXY, agent: require('http').globalAgent, changeOrigin: true }));

app.use(express.static('static'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on :${port}`)
});

