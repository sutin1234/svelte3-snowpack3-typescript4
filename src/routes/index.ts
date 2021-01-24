import { wrap } from 'svelte-spa-router/wrap'
import Home from '@/pages/Home.svelte'
import NotFound from '@/pages/errors/NotFound.svelte'

export default {
    '/': Home,
    '/about': wrap({
        asyncComponent: () => import('@/pages/about.svelte')
    }),
    '/contact': wrap({
        asyncComponent: () => import('@/pages/contact.svelte')
    }),
    '*': NotFound
}

// export default routes