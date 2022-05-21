import { Router } from '@layer0/core/router'

import { CACHE_PAGES } from './cache'

export default new Router()
  .get('/:path*', ({ cache, serveStatic }) => {
    cache(CACHE_PAGES)
    serveStatic('musk/:path*')
  })
