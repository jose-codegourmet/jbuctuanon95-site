const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.ctfassets.net'],
  },

  // for MSW workaround https://github.com/vercel/next.js/issues/40904
  experimental: {
    esmExternals: true,
  },
};
