import { Router } from '@layer0/core/router'
const { BACKENDS } = require('@layer0/core/constants');

import { CACHE_PAGES } from './cache'

export default new Router().static('musk')

  // .get('/:path*', ({ cache, serveStatic, compute, proxy }) => {
  //   cache(CACHE_PAGES)
  //   compute(({ path }) => {
  //     proxy(BACKENDS.static, {path: 'musk/:path*' })
  //   })
    
  //})
