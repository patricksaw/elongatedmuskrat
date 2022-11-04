module.exports = {
  routes: './src/routes.ts',
  connector: '@layer0/starter',
  backends: {
    origin: {
      domainOrIp: 'www.edg.io',
      hostHeader: 'www.edg.io'
    },
  },
}
