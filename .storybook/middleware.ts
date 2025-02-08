import proxy from 'http-proxy-middleware';

module.exports = (router) => {
  router.use(
    '/api/_nuxt_icon',
    proxy.createProxyMiddleware({
      target: 'http://localhost:3000/api/_nuxt_icon',
      changeOrigin: true,
      pathRewrite: {
        '^/api/_nuxt_icon': '',
      },
    })
  );
};
