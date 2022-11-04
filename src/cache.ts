const ONE_HOUR = 60 * 60
const ONE_DAY = 24 * ONE_HOUR
const ONE_WEEK = ONE_DAY * 7
const ONE_YEAR = ONE_WEEK * 52

/**
 * The default cache setting for pages in the shopping flow
 */
export const CACHE_PAGES = {
    edge: {
        maxAgeSeconds: ONE_YEAR,
        staleWhileRevalidateSeconds: ONE_YEAR
    },
    browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_HOUR,
    },
}

/**
 * The default cache setting for static assets like JS, CSS, and images.
 */
export const CACHE_ASSETS = {
    edge: {
        maxAgeSeconds: ONE_YEAR,
        staleWhileRevalidateSeconds: ONE_YEAR,
    },
    browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_DAY,
    },
}
