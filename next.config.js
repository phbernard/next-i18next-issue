const { i18n } = require('./next-i18next.config');

module.exports = {
  // When target is not set, the build succeeds
  // When target is set to serverless, the build fails
  //target: 'serverless',

  reactStrictMode: true,
  i18n
}
