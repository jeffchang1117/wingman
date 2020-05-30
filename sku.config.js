module.exports = {
  clientEntry: 'site/src/client.tsx',
  renderEntry: 'site/src/render.tsx',
  srcPaths: ['site/src'],

  publicPath: '/',
  sites: [{ name: 'seekUnifiedBeta', host: 'dev.seekunifiedbeta.com' }],

  orderImports: true,
};
