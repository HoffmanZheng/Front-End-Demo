const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
    app.use (
        createProxyMiddleware('/api1', {
            target: 'http://localhost:5000',
            changeOrigin: false,  // 隐藏真正的 host
            pathRewrite: {'^/api1': ''}
        }),
        createProxyMiddleware('/api2', {
            target: "http://localhost:5001",
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    );
};